import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
    Welcome {{name}}
    </h2>
    <h2>
    {{2+2}}
    </h2>
    <h2>    {{"Welcome"+ name}} Concatination    </h2>
    <h2>       {{name.length}}    </h2>
    <h2>       {{name.toUpperCase}}    </h2>
    <h2>       {{greet()}}    </h2>

  `,
  styles: [`
h2
{
  align:center;
}
  `]
})
export class TestComponent implements OnInit {

  public name  = "Varun";
  public url = window.location.href;
  constructor() { }

  ngOnInit(): void {
  }

  greet()
  {
    return this.url+" Hello "+this.name;
  }

}
