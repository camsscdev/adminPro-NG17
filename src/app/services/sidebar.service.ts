import { Injectable } from '@angular/core';
import { Menu } from '../shared/sidebar/menu';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: Menu[] = [
    {
      title: 'Tablero',
      icon: 'bi bi-speedometer',
      subMenu: [
        { label: 'Progress', path: 'progress', icon: 'bi bi-arrow-clockwise' },
        { label: 'Grafica', path: 'grafica1', icon: 'bi bi-stack' },
        { label: 'Promesas', path: 'promises', icon: 'bi bi-terminal' },
        { label: 'Rxjs', path: 'rxjs', icon: 'bi bi-terminal' },
      ],
    },
  ];

  constructor() {}
}
