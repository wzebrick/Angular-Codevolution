import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';

@Component({
  selector: 'test-component-selector',

  template: `
   
        <h2> {{ name }}</h2>
        <h2> {{ name | lowercase }}</h2>
        <h2> {{ name | uppercase }}</h2>
        <h2> {{ message | titlecase }}</h2>
        <h2> {{ name | slice:3 }}</h2>
        <h2> {{ name | slice:3:5 }}</h2>
        <!-- Json pipe-->
        <h2> {{person | json }}</h2>

        <h2>{{5.678 |number:'1.2-3'}}</h2>
        <h2>{{5.678 |number:'3.4-5'}}</h2>
        <h2>{{5.678 |number:'3.1-2'}}</h2>

        <h2>{{0.25 | percent}} </h2>

        <h2>{{0.25 | currency }}</h2>
        <h2>{{0.25 | currency: 'GBP' : 'code'}}</h2>

        <h2>{{ date  }}</h2>
        <h2>{{ date | date:'short'}}</h2>
        <h2>{{ date | date:'shortDate'}}</h2>
        <h2>{{ date | date:'shortTime'}}</h2>


        `,
  styles: []
})
export class TestComponent implements OnInit {

  public name ="Wesley";
  public message = "Welcome to Codevolution";
  public person = {
    "firstName": "John",
    "lastName": "Doe"
  }

  public date = new Date();
  constructor() { }

  ngOnInit() {
  }

}



// *****************Child to Parent****************************
// So we sent the name from app.component.ts into the test cmpnt
// by binding it to the test component selector 
// This is using the input module, so we need to import Input from @angular/core
// and then we need to add the @Input() decorator rightbefore the parentData object
// in the test.cmp.ts
// 
// We may also assign an alias!
// We do this by putting the input variable into
//  quotes inside the input decorator's ()
// Then we can simply type public newVarName

//  --------######### Parent to Child ##########--------------
// the child does not have the parent component selector, so data can
// not be sent in the same way. The way a child sends data to parents is using events
// We will need the @output decorator, and the EventEmitter. So import
// Both as input from @angular/core. Then add the output decorator to whatever you are sending
// 
// 
// 
// 
//