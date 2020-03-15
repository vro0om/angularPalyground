import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <p>
                <h2> Department </h2>
  
      <ul *ngFor ="let department of departments">
        <li  (click)="select(department)" [class.selected]="isSelected(department)">
        <span >{{department.id}}</span>      {{department.name}}
        </li>
      </ul>
          
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
  public selectedId;

  constructor(private route : Router,private activeRoute : ActivatedRoute) { }
  public departments=[
    {"id":1,"name" : "Kitchen"},
    {"id":2,"name" : "Accounts"},
    {"id":3,"name" : "Runner"},
    {"id":4,"name" : "Stall Manager"},
  ];
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params:ParamMap)=>{
      this.selectedId = parseInt(params.get('id'));
    })
  }

  select(department)
  {
      this.route.navigate(['/departments',department.id]);
  }
  isSelected(department){
    return department.id===this.selectedId;
  }

}
