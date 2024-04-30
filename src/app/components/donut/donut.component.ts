import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css'],
  standalone: true,
  imports: [BaseChartDirective],
})
export class DonutComponent implements OnInit {
  @Input() title: string = 'sin titulo';
  constructor() {}

  ngOnInit() {}

  // Doughnut
  @Input() public chartLabels: string[] = [];
  @Input() public data: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    { data: [] },
  ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false,
  };
}
