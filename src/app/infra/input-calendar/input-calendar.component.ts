import {Component} from '@angular/core';
import {InputComponent} from '../input/input.component';

@Component({
  selector: 'app-input-calendar',
  templateUrl: './input-calendar.component.html',
  styleUrls: ['./input-calendar.component.scss']
})
export class InputCalendarComponent extends InputComponent {

  data: Date;

  constructor() {
    super();
  }

}
