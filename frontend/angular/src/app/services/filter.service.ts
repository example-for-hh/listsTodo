import { Injectable } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { FILTER_LIST_FRAGMENT } from '../graphql/fragments'
import { TListTodo } from '../models/todoLists'

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  constructor(private apollo: Apollo) {}

  getSelectedFilter(listId: number): string | null {
    const id = this.apollo.client.cache.identify({
      __typename: 'List',
      id: listId,
    })
    const data = this.apollo.client.readFragment<TListTodo>({
      id,
      fragment: FILTER_LIST_FRAGMENT,
    })
    return data?.selectedFilter || null
  }

  updateSelectedFilter(listId: number, filter: string): void {
    const id = this.apollo.client.cache.identify({
      __typename: 'List',
      id: listId,
    })
    this.apollo.client.writeFragment({
      id,
      fragment: FILTER_LIST_FRAGMENT,
      data: {
        selectedFilter: filter,
      },
    })
  }
}
