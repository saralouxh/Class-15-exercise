import { Component, OnInit } from '@angular/core';
import { SearchTermService } from '../shared/search-term.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})

export class SearchResultsComponent implements OnInit {
  searchHistory: string[] = [];

  constructor(private stService: SearchTermService) { }

  ngOnInit(): void {
    this.searchHistory = this.stService.getSearchHistory();

    this.stService.searchHistoryUpdated.subscribe(
      (updatedSearchArray: string[]) => {
        this.searchHistory = updatedSearchArray;
      }
    );

  }
}
