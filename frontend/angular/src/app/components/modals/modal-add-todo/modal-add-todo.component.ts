import { Component, Input, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ModalService } from '@src/app/services/modal.service'
import { TodoService } from '@src/app/services/todo.service'

import { MODAL_ADD_LIST, MODAL_ADD_TODO } from '@src/app/vars/modal'
import { combineLatest, map, Observable, Subscription } from 'rxjs'

@Component({
  selector: 'app-modal-add-todo',
  templateUrl: './modal-add-todo.component.html',
  styleUrl: './modal-add-todo.component.scss',
})
export class ModalAddTodoComponent implements OnInit {
  @Input() title: string
  form: FormGroup
  submitted = false
  listId: number
  public MODAL_ADD_TODO = MODAL_ADD_TODO
  private subscription: Subscription
  isModalVisible$: Observable<boolean>

  constructor(
    private formBuilder: FormBuilder,
    public modalService: ModalService,
    private todoServise: TodoService,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
    })

    this.isModalVisible$ = combineLatest([
      this.modalService.isOpen$,
      this.modalService.modalType$,
      this.modalService.modalProps$,
    ]).pipe(
      map(([isOpen, modalType]) => isOpen && modalType === this.MODAL_ADD_TODO),
    )

    this.subscription = this.modalService.modalProps$.subscribe((listId) => {
      this.listId = listId as number
    })
  }

  onSubmit() {
    this.submitted = true

    if (this.form.valid) {
      const newTodo = {
        title: this.form.value.title,
        listId: this.listId,
      }

      this.todoServise.addTodo(newTodo).subscribe({
        next: () => {
          this.handleClose()
        },
        error: (error) => {
          console.log(error)
        },
      })
    }
  }

  handleClose() {
    this.modalService.close(MODAL_ADD_LIST)
    this.form.reset()
    this.submitted = false
  }
}
