import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCountActiveComponent } from './todo-count-active.component';

describe('TodoCountActiveComponent', () => {
  let component: TodoCountActiveComponent;
  let fixture: ComponentFixture<TodoCountActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoCountActiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoCountActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
