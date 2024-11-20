import { gql } from 'apollo-angular'

export const ADD_LIST = gql`
  mutation ($input: ListInput!) {
    createList(input: $input) {
      id
      title
      todos {
        id
        title
        checked
      }
    }
  }
`

export const REMOVE_LIST = gql`
  mutation ($id: ID!) {
    deleteList(id: $id)
  }
`

export const CLEAR_COMPLETED = gql`
  mutation ($id: ID!) {
    clearCompleted(id: $id) {
      id
      title
      todos {
        id
        title
        checked
      }
    }
  }
`

export const ADD_TODO = gql`
  mutation ($input: TodoInput!, $listId: ID!) {
    createTodo(input: $input, listId: $listId) {
      id
      title
      checked
      listId
    }
  }
`

export const DELETE_TODO = gql`
  mutation ($id: ID!, $listId: ID!) {
    deleteTodo(id: $id, listId: $listId) {
      id
      listId
    }
  }
`

export const UPDATE_TODO = gql`
  mutation ($id: ID!, $listId: ID!) {
    updateTodo(id: $id, listId: $listId) {
      id
      title
      checked
      listId
    }
  }
`
