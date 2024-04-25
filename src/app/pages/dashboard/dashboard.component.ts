import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [HeaderComponent],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
