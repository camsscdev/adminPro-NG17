import { Component, OnInit, inject } from '@angular/core';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css'],
  standalone: true,
  imports: [],
})
export class AccountSettingsComponent implements OnInit {
  public theme = inject(UtilsService);
  constructor() {}

  ngOnInit() {}

  changeTheme(value: string) {
    this.theme.changeTheme(value);
    localStorage.setItem('theme', value);
  }
}
