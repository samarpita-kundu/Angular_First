import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
import { map, catchError } from 'rxjs/operators'; 
import {Observable, throwError} from 'rxjs'

@Injectable()
export class RetrieveDataService {
  constructor(private http: HttpClient) {
    var obj;
    this.getJSON().subscribe(data => obj=data, error => console.log(error));
  }

  public getJSON(): Observable<any> {
    return this.http.get("../assets/data.json").pipe(
        map((res:any) => res.json()),
        catchError(() => {
          console.log("Error in Json Fetchinng");
          return throwError("Error thrown from catchError");
        }));
  }

  search(userData){
    console.log('inside SearchService');
    console.log(userData);
    return userData;
    // return this.http.post<any>(this._url,userData);
  }
}




