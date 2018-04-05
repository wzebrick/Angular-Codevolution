import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
            <h2>
                Welcome {{name}}
            </h2>
            <button (click)="onClick($event)" >Greet</button>
            {{greeting}}

            <button (click) = "greeting = 'Welcome Wesley'">Greet</button>
            `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Wesley";
  public greeting = "";

  constructor() { }

  ngOnInit() {
  }

  onClick(event) {
    console.log(event);
    this.greeting = event.ctrlKey;
  }
}








// event binding lets us capture a dom event and perform any action.
// by using $ event u can get all of the DOM event properties!