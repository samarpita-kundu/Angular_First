import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  template:  `
  <h2>Employee Details</h2>
  {{errorMsg}}
  <div *ngFor="let emp of employees">
  <!--{{emp | json}}-->
  <ul>
  <li>{{emp.id}}-{{emp.name}}-{{emp.department}}</li>
  </ul>
  </div>
  `,
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  public employees = []
  public errorMsg;
  constructor(private _employeeService : EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
    .subscribe(data => this.employees = data,
              error => this.errorMsg = error);
  }
}
