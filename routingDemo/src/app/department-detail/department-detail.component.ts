import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      Seleted department id: {{departmentId}}
    </p>
    <button (click)="previous()">Previous</button>
    <button (click)="next()">Next</button>
    
    <div>
    <button (click)="back()">back</button>
    </div>  

  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;
  constructor(private route :ActivatedRoute,private newRoute:Router) { }

  ngOnInit(): void {
    //Static routing  in this angular doenst call the method and repaint the view
    // let id=this.route.snapshot.paramMap.get('id');
    // this.departmentId= parseInt(id);

    //dynamic
    this.route.paramMap.subscribe((param : ParamMap)=>{
      this.departmentId = parseInt(param.get('id'));
    })
  }

  previous(){
    let previousId = this.departmentId-1;
    this.newRoute.navigate(['/departments',previousId]);
  }
  next(){
    let nextId = this.departmentId+1;
    this.newRoute.navigate(['/departments',nextId]);
  }
  back(){
    this.newRoute.navigate(["/departments",{id:this.departmentId}]);
  }

}
