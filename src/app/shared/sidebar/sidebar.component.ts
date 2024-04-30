import { Component, OnInit, inject } from '@angular/core';
import { Menu } from './menu';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { UtilsService } from '../../services/utils.service';
import { NgClass } from '@angular/common';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true,
  imports: [RouterModule, NgClass, RouterLinkActive],
})
export class SidebarComponent implements OnInit {
  public util = inject(UtilsService);
  public sidebarService = inject(SidebarService);
  menuItems: Menu[] = [];

  constructor() {}

  ngOnInit() {
    this.menuItems = this.sidebarService.menu;
  }
}
