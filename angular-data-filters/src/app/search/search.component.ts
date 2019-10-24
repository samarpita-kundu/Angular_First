import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormGroup , FormBuilder,FormControl} from '@angular/forms';
import {UserServiceComponent} from '../user-service/user-service.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	form: FormGroup;
	@Output() autoSearch: EventEmitter<string> = new EventEmitter<string>();
	@Output() groupFilters: EventEmitter<any> = new EventEmitter<any>();
	searchText: string = '';
	constructor(private fb: FormBuilder,
  private userService: UserServiceComponent) {}
  
	ngOnInit(): void {
		this.buildForm();
  }
  
	buildForm(): void {
		this.form = this.fb.group({
			firstName: new FormControl(''),
			lastName: new FormControl(''),
			jobTitle: new FormControl(''),
			gender: new FormControl(''),
			agefrom: new FormControl(''),
			ageto: new FormControl('')
		});
  } 

  search(filters: any): void {
    Object.keys(filters).forEach(key => filters[key] === '' ? delete filters[key] : key);
    this.groupFilters.emit(filters);
  }
}
