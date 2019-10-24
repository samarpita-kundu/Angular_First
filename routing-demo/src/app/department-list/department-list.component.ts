import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,ParamMap} from '@angular/router';
@Component({
  selector: 'router-outlet',
  template: `
    <h3>
      department-list
    </h3>
    <ul class="items">
    <li (click)="onSelect(department)" [class.selected]='isSelected(department)'
     *ngFor="let department of departments">
      <span class="badge">
        {{department.id}}
      </span>
      {{department.name}}
    </li>
    </ul>

    <div ng-repeat="department in departments | filter:{'id':  1}:true">
    <span class="badge">
        {{department.id}},  {{department.name}}, 
      </span>
    </div>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
  public departments=[
    {"id":1,"name":"Angular"},
    {"id":2,"name":"Node"},
    {"id":3,"name":"MongoDB"},
    {"id":4,"name":"Ruby"},
    {"id":5,"name":"Bootstrap"}
  ];

  public selectedId;
  constructor(private router:Router, private route:ActivatedRoute) { }

  onSelect(department){
    this.router.navigate([department.id],{relativeTo : this.route})
  }

  isSelected(department){
    return department.id===this.selectedId;
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>
    {
      let id = parseInt(params.get('id'));
      this.selectedId=id;
    })
  }

}
