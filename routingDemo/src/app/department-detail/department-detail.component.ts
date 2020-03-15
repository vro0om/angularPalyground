import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      Seleted department id: {{departmentId}}
    </p>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;
  constructor(private route :ActivatedRoute) { }

  ngOnInit(): void {
    let id=this.route.snapshot.paramMap.get('id');
    this.departmentId= parseInt(id);
  }

}
