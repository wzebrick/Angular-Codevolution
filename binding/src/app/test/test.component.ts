import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';

@Component({
  selector: 'test-component-selector',

  template: `
   
        <h2> {{ 'Hello ' + name }}</h2>
        <button (click) = "fireEvent()" >Send Event</button>
           `,
  styles: []
})
export class TestComponent implements OnInit {

  @Input('parentData') public name;

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.childEvent.emit('hey codevolution');
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