import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {IEmployee} from './employee';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})// tells that this might have some other dependencies; add dependencies here in this 
export class EmployeeServiceService {

  private  _url: string = "/assets/data/employees1.json";
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{

    console.log("Called");
    return this.http.get<IEmployee[]>(this._url)
    .catch(this.errorHandler)
  }

  errorHandler(error: HttpErrorResponse)
  {
    return Observable.throw(error.message||"Server Error")
  }

}
