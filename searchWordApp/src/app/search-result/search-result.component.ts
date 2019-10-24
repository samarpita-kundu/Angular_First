import { Component, OnInit } from '@angular/core';
import {RetrieveDataService} from '../retrieve-data.service'
@Component({
  selector: 'app-search-result',
  template: `
  
  
  `,
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  public result;

  constructor(private retrieveDataService: RetrieveDataService) { 
    this.result=retrieveDataService.getJSON;
  }

  ngOnInit() {

  }



}
