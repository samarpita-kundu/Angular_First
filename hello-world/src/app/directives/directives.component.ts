import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-directives',
  template: 
  `
  <h1 *ngIf="displayName; then thenblock;  else elseblock" >
        Codevolution
    </h1>
    <ng-template #elseblock>
        <h2>
            this is else block
        </h2>
    </ng-template>
    <ng-template #thenblock>
        <h2>
            this is then block
        </h2>
    </ng-template>
    <div [ngSwitch]="rang">
      <div *ngSwitchCase = "'red'">You have picked red</div>
      <div *ngSwitchCase = "'green'">You have picked green</div>
      <div *ngSwitchCase = "'blue'">You have picked blue</div>
      <div *ngSwitchDefault>Pick another</div>
    </div>
    <div *ngFor="let color of colors; index as i; first as f; last as l">
    <h2>first color - {{f}}, last color - {{l}}, index - {{i}}, {{color}}</h2>
    </div>
    Hello {{parentName}}
    <div><button (click)="fireEvent()">Emit</button></div>
  `
  ,
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  @Input('parentData') public parentName;
  @Output() public childEvent = new EventEmitter();
  rang = 'orange'
  colors = ['orange','blue','green','yellow','red']

  displayName = true;
  constructor() { }

  fireEvent(){
    this.childEvent.emit('Hey Parent');
  }
  ngOnInit() {
  }
}
