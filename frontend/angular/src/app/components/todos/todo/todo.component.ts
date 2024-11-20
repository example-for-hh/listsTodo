import { Component, Input } from '@angular/core'
import { TTodoItem } from '@src/app/models/todoLists'
import { TodoService } from '@src/app/services/todo.service'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  @Input() todo: TTodoItem
  @Input() listId: number

  constructor(private todoService: TodoService) {}

  removeTodo(listId: number, id: number) {
    this.todoService.removeTodo({ listId, id }).subscribe({
      error: (error) => console.log(error.message),
    })
  }

  updateTodo(listId: number, id: number) {
    this.todoService.updateTodo({ listId, id }).subscribe({
      error: (error) => console.log(error.message),
    })
  }
}
