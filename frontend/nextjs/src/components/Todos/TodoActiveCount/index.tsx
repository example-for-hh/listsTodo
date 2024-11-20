import { FC } from 'react';
import { useApolloClient } from '@apollo/client';
import { ACTIVE_TODO_COUNT_FRAGMENT } from '@src/graphql/todo/fragments';

import { TodoActive } from '../styled';

const TodoActiveCount: FC<{ listId: number }> = ({ listId }) => {
  const client = useApolloClient();

  const { activeTodoCount } = client.readFragment({
    id: client.cache.identify({ __typename: 'List', id: listId }),
    fragment: ACTIVE_TODO_COUNT_FRAGMENT,
  });

  return <TodoActive>{activeTodoCount} items left</TodoActive>;
};

export default TodoActiveCount;
