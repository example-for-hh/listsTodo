import { NgModule } from '@angular/core';
import { HttpLink } from 'apollo-angular/http';
import { Kind, OperationTypeNode } from 'graphql';
import { createClient } from 'graphql-ws';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { InMemoryCache, split } from '@apollo/client/core';
import { environment } from '@src/environments/environment';
import { FILTER_ACTIVE, FILTER_ALL, FILTER_ARCHIVE } from './vars';


@NgModule({
  imports: [
    ApolloModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {


        const http = httpLink.create({
          uri: environment.apiUrl,
        });

        const ws = new GraphQLWsLink(
          createClient({
            url: environment.apiUrlWs,

            on: {
              connected: () => {
                console.log('WebSocket connected');
              },
              closed: () => {
                console.log('WebSocket closed');
              },
              error: (err) => {
                console.log('WebSocket error:', err);
              },
            },
          }),
        );

        // console.log(ws)
        const link = split(
          ({ query }) => {
            const definition = getMainDefinition(query);
            return (
              definition.kind === Kind.OPERATION_DEFINITION &&
              definition.operation === OperationTypeNode.SUBSCRIPTION
            );
          },
          ws,
          http,
        );

        return {

          link,
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
                            (todo: any) => !readField('checked', todo)
                          );
                        case FILTER_ARCHIVE:
                          return existingTodos.filter((todo: any) =>
                            readField('checked', todo)
                          );
                        case FILTER_ALL:
                        default:
                          return existingTodos;
                      }
                    },
                    merge(_, incoming: any[]) {
                      if (incoming.length === 0) {
                        return [];
                      }

                      return incoming;
                    },
                  },
                  activeTodoCount: {
                    read(_, { readField }) {
                      const todos = (readField('todos') as any[]) || [];

                      return todos?.filter(
                        (todo: any) => !readField('checked', todo)
                      ).length;
                    },
                  },
                },
              },
            },
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule { }
