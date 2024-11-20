import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() id = ''
  @Input() placeholder = ''
  @Input() wrapperClass = ''
  @Input() inputClass = ''
  @Input() labelClass = ''
  @Input() icon: string | undefined
  @Input() name = ''
  @Input() type = 'text'
  @Input() label = ''
  @Input() value = ''
  @Output() onBlur: EventEmitter<void> = new EventEmitter<void>()
  @Output() onChangeEvent: EventEmitter<string> = new EventEmitter<string>()
  @Input() disabled!: boolean

  showPassword = false

  onChange: (value: any) => void = () => {}
  onTouched: () => void = () => {}

  writeValue(value: any): void {
    this.value = value
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  getChangeEvent(event: Event): void {
    const value = (event.target as HTMLInputElement).value
    this.onChange(value)
    this.onChangeEvent.emit(value)
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword
  }
}
