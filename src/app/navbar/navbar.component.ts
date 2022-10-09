import { Component, OnInit } from '@angular/core';
import { SearchResultsComponent } from '../search-results/search-results.component';
import { SearchTermService } from '../shared/search-term.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  search: string = '';

  constructor(private stService: SearchTermService) { }

  ngOnInit(): void {
  }

  addToSearchArray() {
    this.stService.addNewSearch(this.search);
  }

}
