import { Component, OnInit, inject } from '@angular/core';
import { BreadcrumbsComponent } from '../shared/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    AccountSettingsComponent,
    RouterOutlet,
  ],
})
export class PagesComponent implements OnInit {
  public theme = inject(UtilsService);

  ngOnInit() {
    const theme = localStorage.getItem('theme');
    this.theme.changeTheme(theme);
  }
}
