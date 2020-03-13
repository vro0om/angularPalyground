import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding-test',
  // first way to bindd       [disabled]
  //second way using        bind-disabled
  // third way to bind      id="{{myId}}"
  template: `
  <div float=left width="50%">
  <h2>  Welcome {{name}}  </h2>
  <input [disabled]="isDisabled" id="{{myId}}" type ="text" value ="Varun">   
  <input bind-disabled="isDisabled" id="{{myId}}" type ="text" value ="Varun">  
  
  <br>
  <input #nameGame [id]="myId" type ="text" value ="Varun">
  <button (click)="callClick(nameGame)" >Sumit</button>

  ngModel : Two way data binding 
  <input [(ngModel)]="name" type="text">
  {{name}}

  <br>
  Class Binding
  <h2 class="test-success"> Mere Karan Arjun</h2>
  <h2 [class]="successClass"> Mere Karan Arjun</h2>
  <h2 class="test-special" [class]="successClass"> both used </h2>
  <h2 [class.test-danger]="hasDanger" > Conditional </h2><button>Toggle</button>
  <h2 [ngClass]="messageClasses"> ngclass used</h2>
  </div>
  <div float=left width="45%">
  <h2 [style.color]="'orange'">  Style Binding</h2>
  <h2 [style.color]="hasDanger?'orange':'pink'"> Conditional Binding2</h2>
  <h2 [style.color]="heghColor"> form variable Binding2</h2>
  <h2 [ngStyle]="titleStyles"> ngStyle attribute </h2>
  
  </div>
  <div float=left width="45%">
  <button (click)="onClick()"> Greet </button>
  <button (click)="onClick2($event)"> Meet </button>
  <button (click)="greeting='welcome'"> Meet Greet </button>
  {{greeting}}
  <div>
`,
styles: [`
  .test-success{
    color:green;
  }
  .test-danger{
    color:red;
  }
  .test-special{
    font-style:italic;
  }
`]
})
export class PropertyBindingTestComponent implements OnInit {
  public name = "Varun ";
  public myId = "testId";
  public successClass ="test-success"
  public heghColor ="gold"
  public hasDanger =false
  public isSpecial = true;
  public error = "";
  public greeting="";
  public team="";
  public messageClasses={
    "test-success" :!this.hasDanger,
    "test-danger":this.hasDanger,
    "test-special": this.isSpecial
  }
  public titleStyles={
    color :"silver",
    fontStyle:"italic"
   
  }
  public isDisabled = true;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.hasDanger = !this.hasDanger;
  }
  onClick2(event){
console.log(event.timeStamp);
  }
  // Templete binding
  callClick(nameGame){
    console.log(nameGame.value);
    this.greeting=nameGame.value;
      }

}
