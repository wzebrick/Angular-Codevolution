import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
            <h2>
                Welcome {{name}}
            <h2 [style.color]= "hasError ? 'red' : 'green'"> Style Binding </h2>
            <h2 [style.color]= "highlightColor">  Style Binding 2</h2>
            <h2 [ngStyle]= "titleStyles"> Style Binding 3 </h2>
            `,
  styles: [`

  `]
})
export class TestComponent implements OnInit {

  public highlightColor = "orange";
  public hasError = false;
  public successClass = "text-success";
  public name = "Wesawoo";
  public isSpecial = true;
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }
  public messageClasses ={
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial

  }

  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return "Hello " + this.name;
  }
}
