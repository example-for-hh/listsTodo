import { useSubscription } from '@apollo/client';
import {
  TODO_CREATED_SUBSCRIPTION,
  TODO_DELETED_SUBSCRIPTION,
  LIST_CREATED_SUBSCRIPTION,
  LIST_DELETED_SUBSCRIPTION,
  CLEAR_COMPLETED_SUBSCRIPTION,
  TODO_UPDATED_SUBSCRIPTION,
} from '@src/graphql/todo/subscriptions';
import { GET_LIST } from '@src/graphql/todo';
import { TListTodo, TTodoItem } from '@src/types';

const useTodoListSubscriptions = () => {
  // Подписка на создание задачи
  useSubscription(TODO_CREATED_SUBSCRIPTION, {
    onData: ({ client, data }) => {
      const newTodo = data.data.todoCreated;

      if (!newTodo) {
        client.refetchQueries({ include: [GET_LIST] });
        return;
      }

      const { id, title, checked, listId } = newTodo;

      client.cache.updateQuery({ query: GET_LIST }, existingData => {
        const updatedLists = existingData?.lists.map((list: TListTodo) => {
          if (list.id === listId) {
            return {
              ...list,
              todos: [...list.todos, { id, title, checked }],
            };
          }
          return list;
        });

        return { lists: updatedLists };
      });
    },
    onError: error =>
      console.error('Subscription error (TODO_CREATED_SUBSCRIPTION):', error),
  });

  useSubscription(TODO_UPDATED_SUBSCRIPTION, {
    onData: ({ client, data }) => {
      const updateTodo = data.data.todoUpdated;

      if (!updateTodo) {
        client.refetchQueries({ include: [GET_LIST] });
        return;
      }

      const { id, listId, checked } = updateTodo;

      client.cache.updateQuery({ query: GET_LIST }, existingData => {
        const updatedLists = existingData?.lists.map((list: TListTodo) => {
          if (list.id === listId) {
            return {
              ...list,
              todos: list.todos.map(todo =>
                todo.id === id ? { ...todo, checked } : todo
              ),
            };
          }
          return list;
        });

        return { lists: updatedLists };
      });
    },
    onError: error =>
      console.error('Subscription error (LIST_DELETED_SUBSCRIPTION):', error),
  });

  // Подписка на удаление задачи
  useSubscription(TODO_DELETED_SUBSCRIPTION, {
    onData: ({ client, data }) => {
      const deleteTodo = data.data.todoDeleted;

      if (!deleteTodo) {
        client.refetchQueries({ include: [GET_LIST] });
        return;
      }

      const { id, listId } = deleteTodo;

      client.cache.updateQuery({ query: GET_LIST }, existingData => {
        const updatedLists = existingData?.lists.map((list: TListTodo) => {
          if (list.id === listId) {
            return {
              ...list,
              todos: list.todos.filter((todo: TTodoItem) => todo.id !== id),
            };
          }
          return list;
        });

        return { lists: updatedLists };
      });
    },
    onError: error =>
      console.error('Subscription error (TODO_DELETED_SUBSCRIPTION):', error),
  });

  // Подписка на создание списка
  useSubscription(LIST_CREATED_SUBSCRIPTION, {
    onData: ({ client, data: subscriptionData }) => {
      const newList = subscriptionData.data.listCreated;

      if (!newList) {
        client.refetchQueries({ include: [GET_LIST] });
        return;
      }

      client.cache.updateQuery({ query: GET_LIST }, existingData => ({
        lists: [...existingData.lists, newList],
      }));
    },
    onError: error =>
      console.error('Subscription error (LIST_CREATED_SUBSCRIPTION):', error),
  });

  // Подписка на удаление списка
  useSubscription(LIST_DELETED_SUBSCRIPTION, {
    onData: ({ client, data: subscriptionData }) => {
      const deletedListId = subscriptionData.data.listDeleted;

      if (!deletedListId) {
        client.refetchQueries({ include: [GET_LIST] });
        return;
      }

      client.cache.updateQuery({ query: GET_LIST }, existingData => ({
        lists: existingData.lists.filter(
          (list: TListTodo) => list.id !== deletedListId
        ),
      }));
    },
    onError: error =>
      console.error('Subscription error (LIST_DELETED_SUBSCRIPTION):', error),
  });

  // Подписка на удаление выполненных задач
  useSubscription(CLEAR_COMPLETED_SUBSCRIPTION, {
    onData: ({ client, data: subscriptionData }) => {
      const clearTodoCompleted = subscriptionData.data.clearTodoCompleted;

      if (!clearTodoCompleted) {
        client.refetchQueries({ include: [GET_LIST] });
        return;
      }

      const { id } = clearTodoCompleted;

      client.cache.updateQuery({ query: GET_LIST }, existingData => {
        const updatedLists = existingData?.lists.map((list: TListTodo) => {
          if (list.id === id) {
            return {
              ...list,
              todos: [],
            };
          }
          return list;
        });

        return { lists: updatedLists };
      });
    },
    onError: error =>
      console.error(
        'Subscription error (CLEAR_COMPLETED_SUBSCRIPTION):',
        error
      ),
  });
};

export default useTodoListSubscriptions;
