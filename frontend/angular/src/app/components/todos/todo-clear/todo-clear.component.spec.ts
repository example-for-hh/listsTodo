import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoClearComponent } from './todo-clear.component';

describe('TodoClearComponent', () => {
  let component: TodoClearComponent;
  let fixture: ComponentFixture<TodoClearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoClearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoClearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
