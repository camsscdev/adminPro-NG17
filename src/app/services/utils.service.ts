import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  public theme = signal('default-light');

  constructor() {}

  changeTheme(value: string | any) {
    this.theme.update(() => value);
  }
}
