import { Component, OnInit } from '@angular/core';
import { BreadcrumbsComponent } from '../shared/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    RouterOutlet,
  ],
})
export class PagesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
