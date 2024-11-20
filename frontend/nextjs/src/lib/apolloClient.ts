import { ApolloClient, InMemoryCache, split, HttpLink } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { TTodoItem } from '@src/types';
import { FILTER_ACTIVE, FILTER_ALL, FILTER_ARCHIVE } from '@vars/todos';



const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
});


const wsLink =
  typeof window !== 'undefined'
    ? new GraphQLWsLink(
      createClient({
        url: 'ws://localhost:4000/subscriptions',
        retryAttempts: 5,
        shouldRetry: () => true,
        on: {
          connected: () => console.log('WebSocket подключен'),
          closed: (event) => console.error('WebSocket закрыт', event),
          error: (error) => console.error('WebSocket ошибка', error),
        },
      })
    )
    : null;

const splitLink =
  typeof window !== 'undefined' && wsLink
    ? split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === 'OperationDefinition' &&
          definition.operation === 'subscription'
        );
      },
      wsLink,
      httpLink
    )
    : httpLink;

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache({
    typePolicies: {
      List: {
        keyFields: ['id'],
        fields: {
          isOpened: {
            read(existing = false) {
              return existing;
            },
          },
          selectedFilter: {
            read(existing = FILTER_ALL) {
              return existing;
            },
          },
          todos: {
            read(existingTodos = [], { readField }) {
              const selectedFilter = readField('selectedFilter');

              switch (selectedFilter) {
                case FILTER_ACTIVE:
                  return existingTodos.filter(
                    (todo: TTodoItem) => !readField('checked', todo)
                  );
                case FILTER_ARCHIVE:
                  return existingTodos.filter((todo: TTodoItem) =>
                    readField('checked', todo)
                  );
                case FILTER_ALL:
                default:
                  return existingTodos;
              }
            },
            merge(_, incoming: TTodoItem[]) {
              if (incoming.length === 0) {
                return [];
              }

              return incoming;
            },
          },
          activeTodoCount: {
            read(_, { readField }) {
              const todos = (readField('todos') as TTodoItem[]) || [];

              return todos?.filter(
                (todo: TTodoItem) => !readField('checked', todo)
              ).length;
            },
          },
        },
      },
    },
  }),
});

export default client;
