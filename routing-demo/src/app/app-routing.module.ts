import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepartmentListComponent} from './department-list/department-list.component';
import {DepartmentDetailsComponent} from './department-details/department-details.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {DepartmentOverviewComponent} from './department-overview/department-overview.component';
import {DepartmentContactComponent} from './department-contact/department-contact.component';

const routes: Routes = [
  // {path : '', redirectTo : '/departments-list' , pathMatch: "full"},
  {path : 'departments-list', component : DepartmentListComponent},
  {path : 'departments-list/:id', 
          component : DepartmentDetailsComponent,
          children: [
            {path:'overview',component : DepartmentOverviewComponent},
            {path:'contact',component : DepartmentContactComponent}
          ]
  },
  {path : 'employees-list', component : EmployeeListComponent},
  {path : '**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent,DepartmentOverviewComponent,DepartmentContactComponent,DepartmentDetailsComponent,EmployeeListComponent,PageNotFoundComponent]
