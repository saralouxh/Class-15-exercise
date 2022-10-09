import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SearchTermService {
  // emit when new search occurs
  searchHistoryUpdated = new EventEmitter<string[]>();

  // store current search history
  private searchHistory: string[] = ['test1', 'test2', 'test3'];

  // read all searchHistory
  getSearchHistory() {
    return this.searchHistory.slice();
  }

  // create new search
  addNewSearch(search: string) {
    this.searchHistory.push(search)
    this.searchHistoryUpdated.emit(this.searchHistory.slice());
  }
}