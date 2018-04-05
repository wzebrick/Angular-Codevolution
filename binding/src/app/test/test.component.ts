import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
            <h2>
                Welcome {{name}}
            </h2>
            <input #myInput type = "text">
           <button (click)="logMessage(myInput.value)">Log</button>
          <h2> This is passing the entire reference variable</h2>
           <button (click)="logMessage(myInput)">Log</button>
           `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Wesley";

  constructor() { }

  ngOnInit() {
  }

  logMessage(value) {
    console.log(value);
  }

}








// Template Reference variables. Add into the opentag #variableName
// 