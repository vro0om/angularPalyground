import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1> Structural Directive</h1>
    <h2>FOR</h2>
    <h2>i value first last odd even</h2>
     <div *ngFor="let pick of colors; index as i;first as f;last as l;odd as o;even as e" >
        <h2>{{i}} {{pick}} {{f}} {{l}} {{o}} {{e}}</h2>
     </div>
     <h2 *ngIf ="show;else elseBlock"> NGIF Clause</h2>
     <button (click)="onShow()">Peek a Boo</button>
     <ng-template #elseBlock>
        <h2>
            Find Me
        </h2>
     </ng-template>

     <div *ngIf="displayName;then thenBlock;else elsesBlock">Displaed with if then else</div>
     <ng-template #thenBlock>
      <h2>
         Then Block
      </h2>
    </ng-template>
     <ng-template #elsesBlock>
        <h2>
            elseBlock
        </h2>
     </ng-template>
      <h2>Switch</h2>
     <div [ngSwitch]="color">
          <div *ngSwitchCase = "'red'">RED is the chosen one</div>
          <div *ngSwitchCase = "'blue'">BLUE is the chosen one</div>
          <div *ngSwitchCase = "'green'">GREEN is the chosen one</div>
          <div *ngSwitchDefault >Abe laude</div>
     </div>

  `,
  styles: [``]
})
export class AppComponent {
  title = 'structuralDirective';
  
  public show =false;
  public displayName = false;
  public color ="red";
  public colors=["red","pink","blue","gold"];
  onShow()
  {
    switch(this.color)
    {
      case "red": {this.color="blue";
    break;}
      case "blue": {this.color="green";break;}
      case "green": {this.color="red";break;}
      
    }
   
    this.show=!this.show;
    this.displayName=!this.displayName;
  }
}
