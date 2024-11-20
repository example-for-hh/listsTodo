import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrl: './modal-header.component.scss',
})
export class ModalHeaderComponent {
  @Input() title: string
}
