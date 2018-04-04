import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
            <h2>
                Welcome {{name}}
            </h2>
            <h2 class ="text-success">Codevolution</h2>
            <h2 [class]="successClass">Codevolution</h2>
            
            <h2 [class] ="specialClass" [class]="successClass">Codevolution</h2>
            <!-- This is if i want it to be conditional baby  --> 
            <h2 [class.text-danger]= "hasError"> Codevolution </h2>
            
            <h2 [ngClass]= "messageClasses"> Codevolution </h2>
            `,
  styles: [`
  
    .text-success{
      color: green;
    }
    .text-danger{
      color:red;
    }
    .text-special{
      font-style: italic;
    }

  `]
})
export class TestComponent implements OnInit {

  public hasError = true;
  public successClass = "text-success";
  public name = "Wesawoo";
  public isSpecial = true;
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
