import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { ButtonComponent } from './components/ui/button/button.component'
import { CheckboxComponent } from './components/ui/checkbox/checkbox.component'
import { CommonModule } from '@angular/common'
import { ErrorFormComponent } from './components/ui/error-form/error-form.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormControlComponent } from './components/ui/form-control/form-control.component'
import { InputComponent } from './components/ui/input/input.component'
import { LogPipe } from './pipes/log.pipe'
import { ModalAddTodoComponent } from './components/modals/modal-add-todo/modal-add-todo.component'
import { ModalBodyComponent } from './components/modals/modal-body/modal-body.component'
import { ModalComponent } from './components/modals/modal/modal.component'
import { ModalCreateListTodosComponent } from './components/modals/modal-create-list-todos/modal-create-list-todos.component'
import { ModalFooterComponent } from './components/modals/modal-footer/modal-footer.component'
import { ModalHeaderComponent } from './components/modals/modal-header/modal-header.component'
import { ReactiveFormsModule } from '@angular/forms'
import { SvgIconComponent } from './components/ui/svg-icon/svg-icon.component'
import { TitleComponent } from './components/ui/title/title.component'
import { TodoComponent } from './components/todos/todo/todo.component'
import { TodoListComponent } from './components/todos/todo-list/todo-list.component'
import { provideHttpClient } from '@angular/common/http'
import { TodoCountActiveComponent } from './components/todos/todo-count-active/todo-count-active.component'
import { TodoFilterComponent } from './components/todos/todo-filter/todo-filter.component'
import { TodoClearComponent } from './components/todos/todo-clear/todo-clear.component'
import { GraphQLModule } from './graphql.module'
import { TodoService } from './services/todo.service'
import { FilterService } from './services/filter.service'

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoComponent,
    SvgIconComponent,
    TitleComponent,
    CheckboxComponent,
    ModalComponent,
    ButtonComponent,
    InputComponent,
    ModalCreateListTodosComponent,
    ErrorFormComponent,
    ModalHeaderComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    FormControlComponent,
    ModalAddTodoComponent,
    TodoCountActiveComponent,
    TodoFilterComponent,
    TodoClearComponent,
    LogPipe,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    GraphQLModule,
  ],
  providers: [provideHttpClient(), TodoService, FilterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
