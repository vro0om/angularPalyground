This project has the ways to use services in angular.

It also includes making requests to a server usint rxjs.

To do this :

module.ts  > import { HttpClientModule  } from '@angular/common/http';


Make the interface for the expected data

service.ts>

	import {HttpClient} from '@angular/common/http';
	import {IEmployee} from './employee';
	import {Observable} from 'exjs/Observable';
	
	 constructor(private http: HttpClient) { }

	The method using the http request needs to return an observable of the expected data type

In the component subscribe to the data and assign it to a object to use