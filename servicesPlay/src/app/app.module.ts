import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';


import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { EmployeeServiceService } from './employee-service.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
