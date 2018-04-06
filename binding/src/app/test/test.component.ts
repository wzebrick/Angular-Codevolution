import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  
  template: `
   

          <div [ngSwitch]="color">

            <div *ngSwitchCase="'red'">You picked red color</div>
            <div *ngSwitchCase="'blue'">You picked blue color</div>
            <div *ngSwitchCase="'green'">You picked green color</div>

            <div *ngSwitchDefault>Pick again </div>

          </div>

           `,
  styles: []
})
export class TestComponent implements OnInit {

  public color= 'blue';

  constructor() { }

  ngOnInit() {
  }
}





// Structural Directives
// Let you add or remove html elements from the DOM
// ngIF < conditionally render html elements
// ngSwitch <- Switch statement

// ngFor <- reneder a list
