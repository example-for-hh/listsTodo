import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms'
import { Component, Input, OnInit } from '@angular/core'

import { ModalService } from '@src/app/services/modal.service'
import { MODAL_ADD_LIST } from '@src/app/vars/modal'
import { combineLatest, map, Observable } from 'rxjs'
import { TodoService } from '@src/app/services/todo.service'

// import { TGetListAddResponse, TListTodo, todosFilters } from '@src/app/models/todoLists';

@Component({
  selector: 'app-modal-create-list-todos',
  templateUrl: './modal-create-list-todos.component.html',
  styleUrls: ['./modal-create-list-todos.component.scss'],
})
export class ModalCreateListTodosComponent implements OnInit {
  @Input() title: string
  form: FormGroup
  submitted = false
  public MODAL_ADD_LIST = MODAL_ADD_LIST

  isModalVisible$: Observable<boolean>

  constructor(
    private formBuilder: FormBuilder,
    private todoServise: TodoService,

    public modalService: ModalService,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      todos: this.formBuilder.array([this.addTodo()]),
    })

    this.isModalVisible$ = combineLatest([
      this.modalService.isOpen$,
      this.modalService.modalType$,
    ]).pipe(
      map(([isOpen, modalType]) => isOpen && modalType === this.MODAL_ADD_LIST),
    )
  }

  onSubmit() {
    this.submitted = true

    if (this.form.valid) {
      this.todoServise
        .addList({
          title: this.form.value.title,
          todos: this.form.value.todos,
        })
        .subscribe({
          next: () => {
            this.handleClose()
          },
          error: (error: { message: any }) => {
            console.log('Error:', error.message)
          },
        })
    }
  }

  handleClose() {
    this.modalService.close(this.MODAL_ADD_LIST)
    this.form.reset()
    this.submitted = false
  }

  getTodoControl(index: number): AbstractControl | null {
    return this.todos.at(index)?.get('title')
  }

  get todos(): FormArray {
    return this.form.get('todos') as FormArray
  }

  addTodo(): FormGroup {
    return this.formBuilder.group({
      title: ['', [Validators.required]],
    })
  }

  addTodos() {
    this.todos.push(this.addTodo())
  }

  removeTodo(index: number) {
    this.todos.removeAt(index)
  }
}
