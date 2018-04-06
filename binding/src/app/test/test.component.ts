import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  
  template: `
   
          <div *ngFor = "let color of colors; index as i; first as f ; last as l ; odd as o; even as e" >
            <h2>{{i}}  {{f}} {{l}} {{o}} {{e}} {{color}}</h2>
          </div>
           `,
  styles: []
})
export class TestComponent implements OnInit {

  public colors = ["red", "blue","green","yellow"];

  constructor() { }

  ngOnInit() {
  }
}





// Structural Directives
// Let you add or remove html elements from the DOM
// ngIF < conditionally render html elements
// ngSwitch <- Switch statement

// ngFor <- reneder a list/ for loops. 
