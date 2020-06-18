import {ControlValueAccessor} from '@angular/forms';
import {Input} from '@angular/core';

export class AbstractControleValueAccessor implements ControlValueAccessor {

  @Input() valor = '';

  onChange = (_: any) => { };

  onTouched = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(val: any): void {
    this.valor = val;
  }


}
