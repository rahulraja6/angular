import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
  <mat-checkbox>Check me!</mat-checkbox>
  <mat-icon>face</mat-icon>
  <button mat-button>Click me!</button>
  `,
  styles: []
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
