import { Component, Input } from '@angular/core'

import { trigger, state, style, animate, transition } from '@angular/animations'
import { ModalService } from '@src/app/services/modal.service'
import { MODAL_ADD_TODO } from '@src/app/vars/modal'
import { TListTodo } from '@src/app/models/todoLists'
import { TodoService } from '@src/app/services/todo.service'
import { Apollo } from 'apollo-angular'
import { IS_OPENED_FRAGMENT } from '@src/app/graphql/fragments'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: '*',
          opacity: 1,
          visibility: 'visible',
        }),
      ),
      state(
        'closed',
        style({
          height: '0px',
          opacity: 0,
          visibility: 'hidden',
        }),
      ),
      transition('open <=> closed', [animate('300ms ease')]),
    ]),
  ],
})
export class TodoListComponent {
  @Input() todoList: TListTodo
  public MODAL_ADD_TODO = MODAL_ADD_TODO

  constructor(
    public modalService: ModalService,
    private todoService: TodoService,
    private apollo: Apollo,
  ) {}

  openModalAddList(id: number) {
    this.modalService.open(this.MODAL_ADD_TODO, id)
  }
  removeList(id: number) {
    this.todoService.removeList(id).subscribe({
      error: (error) => console.log(error.message),
    })
  }

  toggleIsOpened = (id: number) => {
    const existing: any = this.apollo.client.readFragment({
      id: this.apollo.client.cache.identify({ __typename: 'List', id }),
      fragment: IS_OPENED_FRAGMENT,
    })
    console.log(existing)
    if (existing) {
      this.apollo.client.writeFragment({
        id: this.apollo.client.cache.identify({ __typename: 'List', id }),
        fragment: IS_OPENED_FRAGMENT,
        data: {
          isOpened: !existing.isOpened,
        },
      })
    }
  }
}
