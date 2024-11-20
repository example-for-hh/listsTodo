import { Component, OnInit } from '@angular/core'

import { ModalService } from './services/modal.service'
import { MODAL_ADD_LIST } from './vars/modal'

import { TodoService } from './services/todo.service'
import { TListTodo, TTodoItem } from './models/todoLists'
import { Apollo } from 'apollo-angular'
import {
  CLEAR_COMPLETED_SUBSCRIPTION,
  LIST_CREATED_SUBSCRIPTION,
  LIST_DELETED_SUBSCRIPTION,
  TODO_CREATED_SUBSCRIPTION,
  TODO_DELETED_SUBSCRIPTION,
  TODO_UPDATED_SUBSCRIPTION,
} from './graphql/subscriptions'
import { GET_LIST } from './graphql'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'todos'
  public MODAL_ADD_LIST = MODAL_ADD_LIST

  lists: TListTodo[] = []

  constructor(
    public modalService: ModalService,
    private todoService: TodoService,
    private apollo: Apollo,
  ) {}

  ngOnInit(): void {
    this.loadLists()

    this.apollo
      .subscribe<{ listCreated: TListTodo }>({
        query: LIST_CREATED_SUBSCRIPTION,
      })
      .subscribe({
        next: ({ data }) => {
          const newList = data?.listCreated
          if (newList) {
            this.apollo.client.cache.updateQuery(
              { query: GET_LIST },
              (existingData: any) => {
                return {
                  lists: [...existingData.lists, newList],
                }
              },
            )
          }
        },
        error: (err) => {
          console.error('Subscription error:', err)
        },
      })

    this.apollo
      .subscribe<{ listDeleted: TListTodo }>({
        query: LIST_DELETED_SUBSCRIPTION,
      })
      .subscribe({
        next: ({ data }) => {
          const deletedListId = data?.listDeleted
          if (deletedListId) {
            this.apollo.client.cache.updateQuery(
              { query: GET_LIST },
              (existingData: any) => ({
                lists: existingData.lists.filter(
                  (list: any) => list.id !== deletedListId,
                ),
              }),
            )
          }
        },
      })

    this.apollo
      .subscribe<{ todoCreated: TTodoItem }>({
        query: TODO_CREATED_SUBSCRIPTION,
      })
      .subscribe({
        next: ({ data }) => {
          const newTodo = data?.todoCreated
          if (newTodo) {
            const { id, title, checked, listId } = newTodo

            this.apollo.client.cache.updateQuery(
              { query: GET_LIST },
              (existingData: any) => {
                const updatedLists = existingData?.lists.map(
                  (list: TListTodo) => {
                    if (list.id === listId) {
                      return {
                        ...list,
                        todos: [...list.todos, { id, title, checked }],
                      }
                    }
                    return list
                  },
                )

                return { lists: updatedLists }
              },
            )
          }
        },
      })

    this.apollo
      .subscribe<{ todoDeleted: TTodoItem }>({
        query: TODO_DELETED_SUBSCRIPTION,
      })
      .subscribe({
        next: ({ data }) => {
          const deleteTodo = data?.todoDeleted
          if (deleteTodo) {
            const { id, listId } = deleteTodo

            this.apollo.client.cache.updateQuery(
              { query: GET_LIST },
              (existingData: any) => {
                const updatedLists = existingData?.lists.map(
                  (list: TListTodo) => {
                    if (list.id === listId) {
                      return {
                        ...list,
                        todos: list.todos.filter(
                          (todo: TTodoItem) => todo.id !== id,
                        ),
                      }
                    }
                    return list
                  },
                )

                return { lists: updatedLists }
              },
            )
          }
        },
      })

    this.apollo
      .subscribe<{ updateTodo: TTodoItem }>({
        query: TODO_UPDATED_SUBSCRIPTION,
      })
      .subscribe({
        next: ({ data }) => {
          const updateTodo = data?.updateTodo
          if (updateTodo) {
            const { id, listId, checked } = updateTodo

            this.apollo.client.cache.updateQuery(
              { query: GET_LIST },
              (existingData: any) => {
                const updatedLists = existingData?.lists.map(
                  (list: TListTodo) => {
                    if (list.id === listId) {
                      return {
                        ...list,
                        todos: list.todos.map((todo) =>
                          todo.id === id ? { ...todo, checked } : todo,
                        ),
                      }
                    }
                    return list
                  },
                )

                return { lists: updatedLists }
              },
            )
          }
        },
      })

    this.apollo
      .subscribe<{ clearTodoCompleted: TTodoItem }>({
        query: CLEAR_COMPLETED_SUBSCRIPTION,
      })
      .subscribe({
        next: ({ data }) => {
          const clearTodoCompleted = data?.clearTodoCompleted
          if (clearTodoCompleted) {
            const { id } = clearTodoCompleted

            this.apollo.client.cache.updateQuery(
              { query: GET_LIST },
              (existingData: any) => {
                const updatedLists = existingData?.lists.map(
                  (list: TListTodo) => {
                    if (list.id === id) {
                      return {
                        ...list,
                        todos: [],
                      }
                    }
                    return list
                  },
                )

                return { lists: updatedLists }
              },
            )
          }
        },
      })
  }

  loadLists = () => {
    this.todoService.getLists().subscribe({
      next: (lists) => {
        this.lists = lists
        this.initializeCache(this.lists)
      },
      error: (error) => console.log(error.message),
    })
  }

  openModal() {
    this.modalService.open(this.MODAL_ADD_LIST)
  }

  private initializeCache(lists: TListTodo[]): void {
    const existingData = this.apollo.client.readQuery({ query: GET_LIST })

    if (!existingData) {
      this.apollo.client.writeQuery({
        query: GET_LIST,
        data: {
          lists,
        },
      })
    }
  }
}
