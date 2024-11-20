import { gql } from '@apollo/client';

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
`;
