import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-mask',
  templateUrl: './input-mask.component.html',
  styleUrls: ['./input-mask.component.scss']
})
export class InputMaskComponent implements OnInit {

  @Input()
  mask: string;

  @Input()
  placeholder: string;

  @Input()
  id: string;

  constructor() { }

  ngOnInit(): void {
  }

}
