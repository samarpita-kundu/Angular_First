import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <input [(ngModel)]="textCurrent" type="text" [id] ='testId'>
  {{textCurrent}}
  <h2>{{name}}</h2>
  <h2>{{name | lowercase}}</h2>
  <h2>{{name | uppercase}}</h2>
  <h2>{{name | titlecase}}</h2>
  <h2>{{name | slice:1:8}}</h2>
  <h2>{{person | json }}</h2>
  <h2>{{"Welcome "+name}}</h2>
  <h2>{{name.length}}</h2>
  <h2>{{name.toUpperCase()}}</h2>
  <h2>{{greetUser()}}</h2>
  <h2>{{2+2}}</h2>
  <h2>{{2.744 | number:'1.2-3'}}</h2>
  <h2>{{2.744 | number:'3.4-5'}}</h2>
  <h2>{{2.744 | number:'5.1-2'}}</h2>
  <h2>{{2.744 | percent}}</h2>
  <h2>{{2.744 | currency : 'INR' : 'code'}}</h2>
  <h2>{{2.744 | currency : 'INR'}}</h2>
  <h2>{{date}}</h2>
  <h2>{{date | date:'short'}}</h2>
  <h2>{{date | date:'shortDate'}}</h2>
  <h2>{{date | date:'shortTime'}}</h2>
  <h2>{{date | date:'medium'}}</h2>
  <h2>{{windowsLocation}}</h2>
  <input bind-disabled='isDisable' type='text' id={{anotherId}}>
  <button (click)="onGreet($event)">Greet</button>
{{eventType}}
<input type='text' #mytext>
<button (click)="logMsg(mytext.value)">Log</button>
{{logText}}
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public textCurrent = "";
  public name = "samarpita";
  public date = new Date();
  public person = {
    "firstName" : "samarpita",
    "lastName" : "kundu"
  }
  public isDisable = false;
  public myId='testId';
  public anotherId = 'anotherId';
  public windowsLocation = window.location.href;
  public eventType="";
  public logText =""
  constructor() { }
  greetUser(){
    return 'Hello :' + this.name ;
  }
  logMsg(value){
    console.log(value);
    this.logText=value;
  }
  onGreet(event){
    console.log(event);
    this.eventType=event.type
  }
  ngOnInit() {
  }

}
