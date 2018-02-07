import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../form-field';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent {

  @Input() field: FormField<any>;
  @Input() form: FormGroup;

  get isValid() {
    return this.form.controls[this.field.name].valid;
  }

}
