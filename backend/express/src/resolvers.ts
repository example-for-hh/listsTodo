
import { TodoListEntity } from "./entities/todo-list.entity";
import { AppDataSource } from "./db";
import { TodoEntity } from "./entities/todo.entity";

import { PubSub } from 'graphql-subscriptions';

const pubsub = new PubSub();

const listRepository = AppDataSource.getRepository(TodoListEntity);
const todoRepository = AppDataSource.getRepository(TodoEntity);


export const resolvers = {
    Query: {
        list: async (_: any, { id }: { id: number }) => {
            try {
                return await listRepository.findOne({ where: { id }, relations: ['todos'] });
            } catch (error) {
                console.error('Ошибка при получении списка:', error);
                throw new Error('Не удалось получить список.');
            }
        },
        lists: async () => {
            try {
                return await listRepository.find({ relations: ['todos'] });
            } catch (error) {
                console.error('Ошибка при получении списков:', error);
                throw new Error('Не удалось получить списки.');
            }
        },
        todo: async (_: any, { id }: { id: number }) => {
            try {
                return await todoRepository.findOne({ where: { id }, relations: ['list'] });
            } catch (error) {
                console.error('Ошибка при получении задачи:', error);
                throw new Error('Не удалось получить задачу.');
            }
        },
        todos: async () => {
            try {
                return await todoRepository.find();
            } catch (error) {
                console.error('Ошибка при получении задач:', error);
                throw new Error('Не удалось получить задачи.');
            }
        }
    },

    Mutation: {
        createList: async (_: any, { input }: { input: Partial<TodoListEntity> }) => {
            try {

                const list = listRepository.create({ title: input.title });
                const savedList = await listRepository.save(list);

                if (Array.isArray(input.todos) && input.todos.length > 0) {
                    const savedTodo = await Promise.all(input.todos.map(async todoInput => {
                        const todo = todoRepository.create({
                            ...todoInput,
                            list: savedList
                        });
                        return await todoRepository.save(todo);
                    }));
                    savedList.todos = savedTodo;
                }

                pubsub.publish('LIST_CREATED', { listCreated: savedList });

                return savedList;

            } catch (error) {
                console.error('Ошибка при создании списка:', error);
                throw new Error('Не удалось создать список.');
            }
        },

        updateList: async (_: any, { id, input }: { id: number, input: Partial<TodoListEntity> }) => {
            try {

                await listRepository.update(id, input)

                const updatedList = await listRepository.findOne({ where: { id }, relations: ['todos'] })

                pubsub.publish('LIST_UPDATED', { listUpdated: updatedList })

                return updatedList


            } catch (error) {
                console.error('Ошибка при обновлении списка:', error)
                throw new Error('Не удалось обновить список.')
            }
        },

        deleteList: async (_: any, { id }: { id: number }) => {
            try {

                const list = await listRepository.findOne({ where: { id }, relations: ['todos'] });

                if (!list) {
                    throw new Error('Список не найден.');
                }

                if (Array.isArray(list.todos) && list.todos.length > 0) {
                    await Promise.all(list.todos.map(async (todo) => await todoRepository.delete(todo.id)));
                }
                await listRepository.delete(id);

                pubsub.publish('LIST_DELETED', { listDeleted: id });

                return id;
            } catch (error) {
                console.error('Ошибка при удалении списка:', error);
                throw new Error('Не удалось удалить список.');
            }
        },

        createTodo: async (_: any, { input, listId }: { input: Partial<TodoEntity>, listId: number }) => {
            try {
                const findedList = await listRepository.findOne({ where: { id: listId } });
                if (!findedList) {
                    throw new Error(`Список с id ${listId} не найден.`);
                }
                const newTodo = todoRepository.create({
                    ...input,
                    list: findedList
                });
                await todoRepository.save(newTodo);

                pubsub.publish('TODO_CREATED', { todoCreated: { ...newTodo, listId } });

                return { ...newTodo, listId };



            } catch (error) {
                console.error('Ошибка при создании задачи:', error);
                throw new Error('Не удалось создать задачу.');
            }
        },

        updateTodo: async (_: any, { id, listId }: { id: number, listId: number }) => {
            try {
                const todo = await todoRepository.findOne({ where: { id } });
                if (!todo) {
                    throw new Error(`Задача с id ${id} не найдена.`);
                }
                const updatedTodo = { ...todo, checked: !todo.checked };
                await todoRepository.update(id, updatedTodo);

                pubsub.publish('TODO_UPDATED', { todoUpdated: { ...updatedTodo, listId } });

                return { ...updatedTodo, listId };
            } catch (error) {
                console.error('Ошибка при обновлении задачи:', error);
                throw new Error('Не удалось обновить задачу.');
            }
        },

        deleteTodo: async (_: any, { id, listId }: { id: number, listId: number }) => {
            try {
                const todo = await todoRepository.findOne({ where: { id, list: { id: listId } }, relations: ['list'] });
                if (!todo) {
                    throw new Error('Задача не найдена.');
                }
                await todoRepository.remove(todo);

                pubsub.publish('TODO_DELETED', { todoDeleted: { id, listId } });

                return { id, listId };
            } catch (error) {
                console.error('Ошибка при удалении задачи:', error);
                throw new Error('Не удалось удалить задачу.');
            }
        },

        clearCompleted: async (_: any, { id }: { id: number }) => {
            try {

                const findedList = await listRepository.findOne({ where: { id }, relations: ['todos'] });

                if (!findedList) {
                    throw new Error(`Список с id ${id} не найден.`);
                }

                const todos = findedList.todos || [];

                const completedTodos = todos.filter(todo => todo.checked);

                if (completedTodos.length === 0) {
                    return findedList;
                }

                await Promise.all(completedTodos.map(todo => todoRepository.remove(todo)));


                findedList.todos = todos.filter(todo => !todo.checked);
                await listRepository.save(findedList);

                pubsub.publish('CLEAR_TODO_COMPLETED', { clearTodoCompleted: findedList });
                return findedList;

            } catch (error) {
                console.error('Ошибка при очистке завершенных задач:', error);
                throw new Error('Не удалось очистить завершенные задачи.');
            }
        },
    },
    Subscription: {
        listCreated: {
            subscribe: () => pubsub.asyncIterator(['LIST_CREATED']),
        },
        listDeleted: {
            subscribe: () => pubsub.asyncIterator(['LIST_DELETED']),
        },
        listUpdated: {
            subscribe: () => pubsub.asyncIterator(['LIST_UPDATED']),
        },
        todoCreated: {
            subscribe: () => pubsub.asyncIterator(['TODO_CREATED']),
        },
        todoDeleted: {
            subscribe: () => pubsub.asyncIterator(['TODO_DELETED']),
        },
        todoUpdated: {
            subscribe: () => pubsub.asyncIterator(['TODO_UPDATED']),
        },
        clearTodoCompleted: {
            subscribe: () => pubsub.asyncIterator(['CLEAR_TODO_COMPLETED']),
        },
    }
};