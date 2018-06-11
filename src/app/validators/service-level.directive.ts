import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

import { checkServiceLevel } from './custom.validators';

@Directive({
  selector: '[appServiceLevelValidator]',
  providers: [{
      provide: NG_VALIDATORS,
      useExisting: ServiceLevelDirective,
      multi: true
  }]
})
export class ServiceLevelDirective implements Validator {
  @Input() rMin: number;
  @Input() rMax: number;

  validate(c: AbstractControl): { [key: string]: boolean } | null {
    console.log(this.rMax);
    return checkServiceLevel(c, this.rMin, this.rMax);
  }
}
