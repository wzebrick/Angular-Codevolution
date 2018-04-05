import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  // why doesnt ngIf need interpolations {{}} I'll read on this...
  template: `
       <!--   <h2 *ngIf="displayName; else elseBlock">
            Wesley Studys
          </h2>

          <ng-template #elseBlock>
          <h2 >
            Name is hidden
          </h2>
          </ng-template>


          <button (click) = "displayName = !displayName">
          poop
          </button>
        -->

        <div *ngIf="displayName; then thenBlock; else elseBlock"></div>


        <ng-template #thenBlock>
          <h2> Wesley </h2>
        </ng-template>


        <ng-template #elseBlock>
          <h2>Hidden</h2>
        </ng-template>

           `,
  styles: []
})
export class TestComponent implements OnInit {

 public displayName = true;

  constructor() { }

  ngOnInit() {
  }
}





// Structural Direvtives
// Let you add or remove html elements from the DOM
// ngIF < conditionally render html elements
// ngSwitch <- conditionally

// ngFor <- reneder a list
