import { FILTER_ACTIVE, FILTER_ALL, FILTER_ARCHIVE } from '../vars'

export type TTodoItem = {
  id: number
  title: string
  checked: boolean
  listId?: number
}

export type TListTodoResponse = {
  id: number
  title: string
  todos: TTodoItem[]
}
export type TGetListResponse = {
  lists: TListTodoResponse[]
}

export type TListTodo = TListTodoResponse & {
  isOpened: boolean
  selectedFilter: string
  activeTodoCount: number
}

export type TGetListAddResponse = {
  createList: TListTodoResponse
}

export type TGetRemoveListResponse = {
  deleteList: number
}

export type TCreateTodoPayload = {
  title: string
  listId: number
}

export type TRemoveTodoPayload = {
  id: number
  listId: number
}

export type TFilterTodosVariables =
  | typeof FILTER_ALL
  | typeof FILTER_ACTIVE
  | typeof FILTER_ARCHIVE

export type TTodosFilter<T> = {
  [key: string]: T
}

export const todosFilters: TTodosFilter<TFilterTodosVariables> = {
  All: FILTER_ALL,
  Active: FILTER_ACTIVE,
  Archive: FILTER_ARCHIVE,
}
