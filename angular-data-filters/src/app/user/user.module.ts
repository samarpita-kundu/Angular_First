
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { SearchComponent } from '../search/search.component';
import { UserListComponent } from '../user-list/user-list.component';
import { FilterPipe } from '../filter.pipe';
import { UserRoutingModule } from '../user-routing/user-routing.module';
import { UserServiceComponent } from '../user-service/user-service.component';
@NgModule({
  imports:      [ CommonModule, FormsModule, ReactiveFormsModule, UserRoutingModule ],
  declarations: [ UserComponent, SearchComponent, UserListComponent, FilterPipe ],
  providers: [ UserServiceComponent ]
})
export class UserModule { }