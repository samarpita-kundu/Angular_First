import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {IEmployee} from './employee'
import {IUser} from './user'
import axios from 'axios'
import { Observable } from 'rxjs';
import {catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  private _url : string = "assets/employees.json"
  constructor(private http : HttpClient) { 

  }

  getEmployees(){
    return this.http.get<IEmployee[]>(this._url)
    // .catchError(errorHandler(error: HttpErrorResponse){
    //   return Observable.throw(error.message || 'server error');
    // })

   .pipe(catchError( (error) => Observable.throw(error.message || 'server error')))


    // return axios.get<IUser[]>('https://jsonplaceholder.typicode.com/posts');
    //  return  [
    //   {id: "01", name: "Samarpita", department:"IT"},
    //   {id: "02", name: "Arijit", department:"AEIT"}
    // ]
  }

  
}
