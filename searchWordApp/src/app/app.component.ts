import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , FormArray} from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import {RetrieveDataService} from './retrieve-data.service'

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  searchForm : FormGroup;
  // public select = ['ASSOCIATIONS','SEMANTICALLY_SIMILAR_WORDS'];

  constructor(private formBuilder : FormBuilder, 
    private retrieveDataService : RetrieveDataService){
  }

ngOnInit(){
  this.searchForm = this.formBuilder.group({
  language : new FormControl(''),
  word : new FormControl(''),
  apiKey : new FormControl('3acdef1f01cbceb88b132158abd466da'),
  additionalFields: new FormControl(''),
  polarizeWord : new FormControl(false)
  });
  
}

onSubmit(){
    console.log("onSubmit");
    console.log(this.searchForm.value);
    this.retrieveDataService.search(this.searchForm.value)
    .subscribe(
    response => console.log('Success..',response),
    error => console.error('Error!',error)
    );

  }
}