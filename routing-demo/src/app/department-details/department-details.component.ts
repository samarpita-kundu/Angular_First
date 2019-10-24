import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router'
@Component({
  selector: 'app-department-details',
  template: `
    <h3>
      you have selected department with Id = {{departmentId}}
    </h3>
    <p>
    <button (click)="showOverview()">Overview</button>
    <button (click)="showContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>
    <a (click)="goPrevious()">Previous</a>
    <a (click)="goNext()">Next</a>
    <div>
    <button (click)="goBack()">Back</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailsComponent implements OnInit {
  public departmentId;
  // public departmentName;
  constructor(private route : ActivatedRoute , private router: Router){ }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // let name = this.route.snapshot.paramMap.get('name');
    // this.departmentId = id;
    // this.departmentName = name;
    this.route.paramMap.subscribe((params:ParamMap)=>
    {
      let id = parseInt(params.get('id'));
      this.departmentId=id;
    })
  }

  goPrevious(){
    let previousId = this.departmentId - 1;
    this.router.navigate([{id:previousId}],{relativeTo : this.route});
  } 
  
  goNext(){
    let nextId = this.departmentId + 1;
    this.router.navigate([{id: nextId}],{relativeTo : this.route});
  }

  goBack(){
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['../',{id: selectedId}],{relativeTo : this.route});
  }

  showOverview(){
    this.router.navigate(['overview'],{relativeTo : this.route});
  }

  showContact(){
    this.router.navigate(['contact'],{relativeTo : this.route});
  }

}
