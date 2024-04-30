import { Component } from '@angular/core';
import { DonutComponent } from '../../components/donut/donut.component';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css'],
  standalone: true,
  imports: [DonutComponent],
})
export class Grafica1Component {
  ngOnInit() {}

  public labels1: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  public labels2: string[] = [
    'Download shop',
    'In-Store shop',
    'Mail-Order shop',
  ];
  public labels3: string[] = [
    'Download redistributing',
    'In-Store redistributing',
    'Mail-Order redistributing',
  ];
  public labels4: string[] = [
    'Download finally',
    'In-Store finally',
    'Mail-Order finaly',
  ];

  // data /
  public data1: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    { data: [350, 450, 100] },
  ];
  public data2: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    { data: [100, 320, 620] },
  ];
  public data3: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    { data: [40, 450, 600] },
  ];
  public data4: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    { data: [590, 900, 104] },
  ];
}
