import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  template:`
  <h2> Employee List</h2>
    <ul *ngFor ="let emp of employee">
      <li  >{{emp.name}}</li>
    </ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {
    public employee=[];
  constructor(private _employeeService: EmployeeServiceService) { }

  ngOnInit(): void {
    this.employee=this._employeeService.getEmployees();
    console.log(this.employee);
  }

}
