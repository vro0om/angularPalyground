import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})// tells tha tthis might have soem other dependencies add them in this 
export class EmployeeServiceService {

  constructor() { }

  getEmployees(){

    console.log("Called");
    return [
        {"id":1,"name":"Roshni","age":30},
        {"id":2,"name":"Kai","age":26},
        {"id":3,"name":"Poorvi","age":20},
        {"id":4,"name":"Avnika","age":27}
    ];
  }
}
