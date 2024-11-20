import { gql } from '@apollo/client';

export const LIST_CREATED_SUBSCRIPTION = gql`
  subscription {
    listCreated {
      id
      title
      todos {
        id
        title
        checked
      }
    }
  }
`;

export const LIST_DELETED_SUBSCRIPTION = gql`
  subscription {
    listDeleted
  }
`;

export const LIST_UPDATED_SUBSCRIPTION = gql`
  subscription {
    listUpdated {
      id
      title
      todos {
        id
        title
        checked
      }
    }
  }
`;

export const TODO_CREATED_SUBSCRIPTION = gql`
  subscription {
    todoCreated {
      id
      title
      checked
      listId
    }
  }
`;

export const TODO_DELETED_SUBSCRIPTION = gql`
  subscription {
    todoDeleted {
      id
      listId
    }
  }
`;

export const TODO_UPDATED_SUBSCRIPTION = gql`
  subscription {
    todoUpdated {
      id
      checked
      listId
    }
  }
`;

export const CLEAR_COMPLETED_SUBSCRIPTION = gql`
  subscription {
    clearTodoCompleted {
      id
      todos {
        id
        title
        checked
      }
    }
  }
`;
