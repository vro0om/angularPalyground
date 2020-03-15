import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  template:`
  <h2> Employee List</h2>
  <h2>{{errorMsg}}</h2>

    <ul *ngFor ="let emp of employee">
      <li  >{{emp.name}}</li>
    </ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {
    public employee=[];
  constructor(private _employeeService: EmployeeServiceService) { }
  public errorMsg;

  ngOnInit(): void {
    this._employeeService.getEmployees()
    .subscribe(data => this.employee = data,
                error => this.errorMsg = error);
    console.log(this.employee);
  }

}
