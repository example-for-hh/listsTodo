import { Component, Input } from '@angular/core'
import { TPageTitle } from '../../../models/title'

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent {
  @Input() headingLevel: TPageTitle = 'h1'
  @Input() title: string
  @Input() isUpperCase = false
  @Input() isTitleCase = false
  @Input() isCapitalized = false

  getTitle(): string {
    let formattedTitle = this.title
    if (this.isUpperCase) {
      formattedTitle = formattedTitle.toUpperCase()
    } else if (this.isTitleCase) {
      formattedTitle = this.toTitleCase(formattedTitle)
    } else if (this.isCapitalized) {
      formattedTitle = this.capitalize(formattedTitle)
    }
    return formattedTitle
  }

  private toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
  }

  private capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  }
}
