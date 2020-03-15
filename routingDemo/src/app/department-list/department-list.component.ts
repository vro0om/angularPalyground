import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <p>
                <h2> Department </h2>
  
      <ul *ngFor ="let department of departments">
        <li  (click)="select(department)">
        <span >{{department.id}}</span>      {{department.name}}
        </li>
      </ul>
          
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  constructor(private route : Router) { }
  public departments=[
    {"id":1,"name" : "Kitchen"},
    {"id":2,"name" : "Accounts"},
    {"id":3,"name" : "Runner"},
    {"id":4,"name" : "Stall Manager"},
  ];
  ngOnInit(): void {
  }

  select(department)
  {
      this.route.navigate(['/departments',department.id]);
  }

}
