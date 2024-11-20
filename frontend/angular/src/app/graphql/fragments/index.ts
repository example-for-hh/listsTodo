import { gql } from 'apollo-angular'

export const FILTER_LIST_FRAGMENT = gql`
  fragment SelectedFilterField on List {
    selectedFilter
  }
`

export const ACTIVE_TODO_COUNT_FRAGMENT = gql`
  fragment SelectedActiveTodoCountField on List {
    activeTodoCount
  }
`

export const IS_OPENED_FRAGMENT = gql`
  fragment IsOpenedField on List {
    isOpened
  }
`
