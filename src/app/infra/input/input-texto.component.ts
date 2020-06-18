import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-input-texto',
  templateUrl: './input-texto.component.html',
  styleUrls: ['./input-texto.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextoComponent),
      multi: true
    }
  ]
})
export class InputTextoComponent implements OnInit, ControlValueAccessor {

  @Input() id?: string;
  @Input() tipo?: string;
  @Input() placeholder ?: string;
  @Input() required ? = false;
  val: any;


  onChange: any = () => {};
  onTouch: any = () => {};

  set value(val) {
    if (val !== undefined && this.val !== val) {
      this.val = val;
      this.onChange(val);
      this.onTouch(val);
    }

  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }


  constructor() {
  }

  ngOnInit(): void {
  }

}
