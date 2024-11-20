import { Component, Input } from '@angular/core'
import { AbstractControl } from '@angular/forms'
import { ERROR_EMAIL, ERROR_REQUIRED, ERROR_MIN_LENGTH } from '@src/app/vars'

@Component({
  selector: 'app-error-form',
  templateUrl: './error-form.component.html',
  styleUrl: './error-form.component.scss',
})
export class ErrorFormComponent {
  @Input() control: AbstractControl | null = null
  public ERROR_REQUIRED = ERROR_REQUIRED
  public ERROR_EMAIL = ERROR_EMAIL
  public ERROR_MIN_LENGTH = ERROR_MIN_LENGTH
}
