import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormField } from './form-field';

@Injectable()
export class FieldControlService {

  constructor() { }

  toFormGroup(fields: FormField<any>[]) {
    const group: any = {};
    fields.forEach(field => {
      group[field.name] = field.required ? new FormControl(field.value, Validators.required)
        : new FormControl(field.value);
    });
    return new FormGroup(group);
  }

}
