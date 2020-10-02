import { Component, Input, OnInit } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})

export class DonaComponent implements OnInit {
  @Input() title: string = 'Sin titulo';

  @Input('labels') doughnutChartLabels: Label[] = [];
  @Input('data') doughnutChartData: MultiDataSet = [];
  public colors: Color[] = [{
    backgroundColor: ['#28a745', '#20c997', '#6610f2']
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
