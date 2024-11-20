import { Component, Input } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { ACTIVE_TODO_COUNT_FRAGMENT } from '@src/app/graphql/fragments'

@Component({
  selector: 'app-todo-count-active',
  templateUrl: './todo-count-active.component.html',
  styleUrl: './todo-count-active.component.scss',
})
export class TodoCountActiveComponent {
  @Input() listId: number

  constructor(private apollo: Apollo) {}

  count(): number {
    const { activeTodoCount } = this.apollo.client.readFragment<any>({
      id: this.apollo.client.cache.identify({
        __typename: 'List',
        id: this.listId,
      }),
      fragment: ACTIVE_TODO_COUNT_FRAGMENT,
    })

    return activeTodoCount
  }
}
