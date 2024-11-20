import { gql } from '@apollo/client';

export const filterListFragment = gql`
  fragment SelectedFilterField on List {
    selectedFilter
  }
`;

export const ACTIVE_TODO_COUNT_FRAGMENT = gql`
  fragment SelectedActiveTodoCountField on List {
    activeTodoCount
  }
`;
