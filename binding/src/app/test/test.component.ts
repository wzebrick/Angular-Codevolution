import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `

          <input [(ngModel)]="name" type ="text">
          {{name}}

           `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "";

  constructor() { }

  ngOnInit() {
  }

  logMessage(value) {
    console.log(value);
  }

}








// [] is property binding. data flow from class to template
// () for event binding data flowfrom template to the clasee
//this is two way binding
// ngModel uses two way binding, and it needs to be imported in app module ts

// From the input the data flows to the class proprety and from the class property flows back to the
//template...

// import { FormsModule } from '@angular/forms';
// add to imports array too.. FormsModule
