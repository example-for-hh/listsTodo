import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() title: string
  @Input() isIcon = false
  @Input() type = 'button'
  @Input() isDisabled? = false
  @Input() additionalClass?: string

  getButtonClasses(): { [key: string]: boolean } {
    const classes: Record<string, boolean> = {
      btn: true,
    }

    if (this?.additionalClass) {
      classes[`btn--${this.additionalClass}`] = true
    }

    return classes
  }
}
