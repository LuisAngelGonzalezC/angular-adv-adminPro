import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {
  labels: Array<string> = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  data: Array<number> = [350, 450, 100];
  constructor() { }

  ngOnInit(): void {
  }

}
