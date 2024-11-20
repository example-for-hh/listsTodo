import { gql } from 'apollo-angular'

export const GET_LIST = gql`
  query {
    lists {
      id
      title
      todos {
        id
        title
        checked
      }
      isOpened @client
      selectedFilter @client
      activeTodoCount @client
    }
  }
`
