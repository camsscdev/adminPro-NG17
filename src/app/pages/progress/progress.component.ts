import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { IncrementadorComponent } from '../../components/incrementador/incrementador.component';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
  standalone: true,
  imports: [FormsModule, IncrementadorComponent],
})
export class ProgressComponent {
  progress1: number = 25;
  progress2: number = 45;
  constructor() {}
  // get getPercenteage() {
  //   ;
  //   return `${this.progress1} %` || `${this.progress2}%`;
  // }
  get getPercenteage1() {
    return `${this.progress1}%`;
  }
  get getPercenteage2() {
    return `${this.progress2}%`;
  }
  public changeValue(valor: number) {
    // this.progress = valor;
  }
}
