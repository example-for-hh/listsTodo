import { Injectable } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import {
  ADD_LIST,
  ADD_TODO,
  CLEAR_COMPLETED,
  DELETE_TODO,
  GET_LIST,
  REMOVE_LIST,
  UPDATE_TODO,
} from '../graphql'
import { TListTodo, TTodoItem } from '../models/todoLists'

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private apollo: Apollo) {}

  getLists(): Observable<any> {
    return this.apollo
      .watchQuery<{ lists: TListTodo[] }>({
        query: GET_LIST,
      })
      .valueChanges.pipe(map((result) => result.data.lists))
  }

  addList(newList: { title: string; todos: TTodoItem[] }): Observable<any> {
    return this.apollo
      .mutate<{ createList: TListTodo }>({
        mutation: ADD_LIST,
        variables: { input: newList },
      })
      .pipe(map((result) => result.data?.createList))
  }

  removeList(id: number): Observable<number | undefined> {
    return this.apollo
      .mutate<{ deleteList: number }>({
        mutation: REMOVE_LIST,
        variables: { id },
      })
      .pipe(map((result) => result.data?.deleteList))
  }

  addTodo(newTodo: { title: string; listId: number }): Observable<any> {
    const { title, listId } = newTodo

    return this.apollo
      .mutate<{ createTodo: TTodoItem }>({
        mutation: ADD_TODO,
        variables: {
          input: { title },
          listId,
        },
      })
      .pipe(map((result) => result.data?.createTodo))
  }

  removeTodo(deleteTodo: { listId: number; id: number }): Observable<any> {
    const { id, listId } = deleteTodo

    return this.apollo
      .mutate<{ deleteTodo: any }>({
        mutation: DELETE_TODO,
        variables: { id, listId },
      })
      .pipe(map((result) => result.data?.deleteTodo))
  }

  updateTodo({ id, listId }: { id: number; listId: number }): Observable<any> {
    return this.apollo
      .mutate<{ updateTodo: TTodoItem }>({
        mutation: UPDATE_TODO,
        variables: { id, listId },
      })
      .pipe(map((result) => result.data?.updateTodo))
  }

  clearCompleted(id: number): Observable<any> {
    return this.apollo
      .mutate<{ clearCompleted: any }>({
        mutation: CLEAR_COMPLETED,
        variables: { id },
      })
      .pipe(map((result) => result.data?.clearCompleted))
  }
}
