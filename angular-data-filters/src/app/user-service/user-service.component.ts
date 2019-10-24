import { Component, OnInit } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { USERS } from '../data/user.data';

@Component({
  selector: 'app-user-service',
  templateUrl: './user-service.component.html',
  styleUrls: ['./user-service.component.css']
})

export class UserServiceComponent {
	setGroupFilter$ = new Subject<any>();
	getGroupFilter = this.setGroupFilter$.asObservable();
	constructor() {}
	fetchUsers(): Observable<any> {
		return of (USERS);
	}
}
