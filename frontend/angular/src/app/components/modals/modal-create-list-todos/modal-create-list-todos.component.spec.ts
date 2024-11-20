import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateListTodosComponent } from './modal-create-list-todos.component';

describe('ModalCreateListTodosComponent', () => {
  let component: ModalCreateListTodosComponent;
  let fixture: ComponentFixture<ModalCreateListTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCreateListTodosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCreateListTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
