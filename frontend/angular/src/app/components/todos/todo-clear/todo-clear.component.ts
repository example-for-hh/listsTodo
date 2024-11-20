import { Component, Input } from '@angular/core'
import { TodoService } from '@src/app/services/todo.service'

@Component({
  selector: 'app-todo-clear',
  templateUrl: './todo-clear.component.html',
  styleUrl: './todo-clear.component.scss',
})
export class TodoClearComponent {
  @Input() listId: number
  @Input() text: string

  constructor(private todoService: TodoService) {}

  clearCompleted() {
    this.todoService.clearCompleted(this.listId).subscribe({
      error: (error) => console.log(error.message),
    })
  }
}
