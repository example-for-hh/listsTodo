import { Component, Input, OnInit } from '@angular/core'
import { FilterService } from '@src/app/services/filter.service'
import { FILTER_ACTIVE, FILTER_ALL, FILTER_ARCHIVE } from '@src/app/vars'

@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrl: './todo-filter.component.scss',
})
export class TodoFilterComponent implements OnInit {
  selectedFilter: string | null = null
  @Input() listId: number

  public filterAll = FILTER_ALL
  public filterArchive = FILTER_ARCHIVE
  public filterActive = FILTER_ACTIVE

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.selectedFilter = this.filterService.getSelectedFilter(this.listId)
  }

  handleFilterClick(filter: string): void {
    this.filterService.updateSelectedFilter(this.listId, filter)
    this.selectedFilter = filter
  }
  handleKey(event: KeyboardEvent, filter: string) {
    if (event.key === 'Enter' || event.key === ' ') {
      this.handleFilterClick(filter)
    }
  }
}
