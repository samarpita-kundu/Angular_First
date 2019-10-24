import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name : String='';
  constructor(private _http : HttpClient){
    
  }
  onNameKeyUp(event:any){
    // console.log(event.target.value);
    this.name = event.target.value;
  }

  getProfile(){
    this._http.get(`https://api.gavagai.se/v3/languages?apiKey=3acdef1f01cbceb88b132158abd466da`)
    .subscribe(
      (data)=>{
        console.log(data);
      }
    );
  
  }
}
