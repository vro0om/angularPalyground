import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`
    <h2>{{"Hello "+name}}</h2>
    <button (click)="fire()"> Send Event </button>
    <h2>pipes -> only transform dat afor view</h2>
    <h2>{{name | uppercase}}</h2>
    <h2>{{name | lowercase}}</h2>
    <h2>{{name | slice:2:4}}</h2>
    <h2>{{message | titlecase}}</h2>
    <h2>{{obj | json}}</h2>

    <h2>{{3.1427 | number:'1.2-3'}}</h2>
    <h2>{{3.1427 | number:'5.1-2'}}</h2>

    <h2>{{0.25 | percent}}</h2>

    <h2>{{52| currency }}</h2>
    <h2>{{52| currency :'INR'}}</h2>
    <h2>{{52| currency :'INR':'code'}}</h2>
    
    <h2>{{date}}</h2>
    <h2>{{date|date:'short'}}</h2>
    <h2>{{date|date:'shortDate'}}</h2>
    <h2>{{date|date:'shortTime'}}</h2>
    <h2>{{date|date:'long'}}</h2>
    <h2>{{date|date:'longDate'}}</h2>
    <h2>{{date|date:'longTime'}}</h2>



  `,
  styles: [``]
})
export class TestComponent implements OnInit {

  constructor() { }
  public message=" you eat banana";

  public obj={
    name :"Ritika",
    surname:"Not Yadav"

  }

  public date = new  Date();
  @Input('parentData')public name;
  @Output() public childEvent = new EventEmitter();

  fire(){
    this.childEvent.emit('It is alive');
  }
  ngOnInit(): void {
  }

}
