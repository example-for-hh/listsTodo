import { Component, EventEmitter, Output } from '@angular/core'
import { animate, query, style, transition, trigger } from '@angular/animations'

import { ModalService } from '../../../services/modal.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  animations: [
    trigger('modalState', [
      transition(':enter', [
        style({ opacity: 0 }),
        query('.modal__content', [style({ transform: 'translateY(-220px)' })]),

        animate('150ms ease-out', style({ opacity: 1 })),
        query('.modal__content', [
          animate('200ms ease-out', style({ transform: 'translateY(0)' })),
        ]),
      ]),

      transition(':leave', [
        query('.modal__content', [
          animate('150ms ease-in', style({ transform: 'translateY(-220px)' })),
        ]),
        animate('150ms ease-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class ModalComponent {
  @Output() modalClose = new EventEmitter<void>()

  constructor(public modalService: ModalService) {}

  closeModal() {
    this.modalClose.emit()
  }
}
