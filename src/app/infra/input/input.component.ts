import {Input} from '@angular/core';
import {AbstractControleValueAccessor} from '../AbstractControleValueAccessor';

export class InputComponent extends AbstractControleValueAccessor{
  @Input() id?: string;
  @Input() tipo?: string;
  @Input() placeholder ?: string;
  @Input() required ? = false;
  @Input() label ?: string;
}
