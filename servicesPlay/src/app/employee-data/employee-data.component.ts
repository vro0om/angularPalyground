import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';


@Component({
  selector: 'app-employee-data',
  template:`
  <h2>ma chichos</h2>

  <ul *ngFor ="let emp of employee">
  <li  >{{emp.id}}  {{emp.name}} {{emp.age}}</li>
</ul>
  `,
  styles: []
})
export class EmployeeDataComponent implements OnInit {
  public employee=[];
  constructor(private _employeeService: EmployeeServiceService) { }

  ngOnInit(): void {
    this.employee=this._employeeService.getEmployees();
  }
}
