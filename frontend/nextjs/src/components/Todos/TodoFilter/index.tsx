import { FC, useState } from 'react';
import { useApolloClient } from '@apollo/client';
import { FILTER_ACTIVE, FILTER_ALL, FILTER_ARCHIVE } from '@vars/todos';
import { TodoActions, TodoSpan } from '../styled';
import { filterListFragment } from '@src/graphql/todo/fragments';

const TodoFilter: FC<{ listId: number }> = ({ listId }) => {
  const client = useApolloClient();

  const { selectedFilter: currentFilter } = client.readFragment({
    id: client.cache.identify({ __typename: 'List', id: listId }),
    fragment: filterListFragment,
  });

  const [selectedFilter, setSelectedFilter] = useState(currentFilter);

  const handleFilterClick = (filter: string) => {
    client.writeFragment({
      id: client.cache.identify({ __typename: 'List', id: listId }),
      fragment: filterListFragment,
      data: {
        selectedFilter: filter,
      },
    });

    setSelectedFilter(filter);
  };

  return (
    <TodoActions>
      <TodoSpan
        $active={selectedFilter === FILTER_ALL}
        onClick={() => handleFilterClick(FILTER_ALL)}>
        {FILTER_ALL}
      </TodoSpan>
      <TodoSpan
        $active={selectedFilter === FILTER_ACTIVE}
        onClick={() => handleFilterClick(FILTER_ACTIVE)}>
        {FILTER_ACTIVE}
      </TodoSpan>
      <TodoSpan
        $active={selectedFilter === FILTER_ARCHIVE}
        onClick={() => handleFilterClick(FILTER_ARCHIVE)}>
        {FILTER_ARCHIVE}
      </TodoSpan>
    </TodoActions>
  );
};

export default TodoFilter;
