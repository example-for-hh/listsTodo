import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
} from '@angular/core'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrl: './svg-icon.component.scss',
})
export class SvgIconComponent implements OnInit {
  @Input() name: string
  @Input() @HostBinding('class') externalClass: string
  @Input() width = '24px'
  @Input() height = '24px'
  svgIcon: Observable<SafeHtml>
  @Output() clickSvgIcon? = new EventEmitter<void>()
  constructor(
    private sanitizer: DomSanitizer,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.svgIcon = this.http
      .get(`assets/icons/${this.name}.svg`, { responseType: 'text' })
      .pipe(map((svg) => this.sanitizer.bypassSecurityTrustHtml(svg)))
  }

  onClick() {
    this.clickSvgIcon?.emit()
  }
}
