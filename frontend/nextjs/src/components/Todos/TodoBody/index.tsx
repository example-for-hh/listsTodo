import { FC } from 'react';
import {
  gql,
  useApolloClient,
  useMutation,
  useQuery,
  useSubscription,
} from '@apollo/client';
import { GET_LIST, REMOVE_LIST } from '@src/graphql/todo';

import IconArrow from '@components/ui/Icons/IconArrow';

import { useAppDispatch } from '@src/hooks/redux';

import { TListTodoClient } from '@src/types';

import { modalToggle } from '@store/modal/slice';
import { MODAL_ADD_TODOS } from '@vars/modal';

import TodoActiveCount from '../TodoActiveCount';

import TodoFilter from '../TodoFilter';

import TodoClear from '../TodoClear';

import { IconRemove } from '@components/ui/Icons';

import {
  ToboBodyStyled,
  TodoBottom,
  TodoEmpty,
  TodoItem,
  TodoJobs,
  TodoTitle,
  TodoTitleSpan,
  TodoWrapperIcons,
} from '../styled';
import Title from '@components/ui/Title';

import Todo from '../Todo';

const TodoBody: FC = () => {
  const dispatch = useAppDispatch();
  const client = useApolloClient();

  const [removeList] = useMutation(REMOVE_LIST, {
    onError: error => console.error('Error remove list:', error),
  });

  const { data, loading, error } = useQuery(GET_LIST);

  const toggleIsOpened = (id: number) => {
    const existing = client.readFragment({
      id: client.cache.identify({ __typename: 'List', id }),
      fragment: gql`
        fragment IsOpenedField on List {
          isOpened
        }
      `,
    });

    if (existing) {
      client.writeFragment({
        id: client.cache.identify({ __typename: 'List', id }),
        fragment: gql`
          fragment IsOpenedField on List {
            isOpened
          }
        `,
        data: {
          isOpened: !existing.isOpened,
        },
      });
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ToboBodyStyled>
      {data.lists.length > 0 ? (
        data.lists.map((list: TListTodoClient) => (
          <TodoItem $isOpened={list.isOpened} key={list.id}>
            <TodoTitle>
              <IconArrow
                width={20}
                height={20}
                onClick={() => toggleIsOpened(list.id)}
              />

              <TodoTitleSpan onClick={() => toggleIsOpened(list.id)}>
                {list.title}
              </TodoTitleSpan>

              <TodoWrapperIcons>
                <IconRemove
                  width={20}
                  height={20}
                  type="add"
                  onClick={() =>
                    dispatch(
                      modalToggle({
                        modalType: MODAL_ADD_TODOS,
                        modalProps: {
                          listId: list.id,
                        },
                      })
                    )
                  }
                />

                <IconRemove
                  width={20}
                  height={20}
                  type="remove"
                  onClick={() =>
                    removeList({
                      variables: { id: list.id },
                    })
                  }
                />
              </TodoWrapperIcons>
            </TodoTitle>
            {list.isOpened && (
              <TodoJobs>
                {list.todos && list.todos.length > 0 ? (
                  list.todos.map(todo => (
                    <Todo key={todo.id} listId={list.id} todo={todo} />
                  ))
                ) : (
                  <TodoEmpty>Список задач пока пустой</TodoEmpty>
                )}
              </TodoJobs>
            )}
            <TodoBottom>
              <TodoActiveCount listId={list.id} />
              <TodoFilter listId={list.id} />
              <TodoClear listId={list.id} />
            </TodoBottom>
          </TodoItem>
        ))
      ) : (
        <Title title="Список задач пуст" type="h2" />
      )}
    </ToboBodyStyled>
  );
};

export default TodoBody;
