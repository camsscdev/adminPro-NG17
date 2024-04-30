import { NgClass } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  input,
  output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css'],
  standalone: true,
  imports: [FormsModule, NgClass],
})
export class IncrementadorComponent implements OnInit {
  @Input() progress: number = 0;
  @Output() valueHandle: EventEmitter<number> = new EventEmitter();
  @Input() btnClass: string = 'btn-primary';

  constructor() {}

  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }

  public changeValue(value: number): any {
    if (this.progress >= 100 && value >= 0) {
      this.valueHandle.emit(100);
      return (this.progress = 100);
    }
    if (this.progress <= 0 && value < 0) {
      this.valueHandle.emit(0);
      return (this.progress = 0);
    }
    this.progress = this.progress + value;
    this.valueHandle.emit(this.progress);
  }

  onChange(newValue: number) {
    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }
    this.valueHandle.emit(this.progress);
  }
}
