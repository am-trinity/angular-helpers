import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormField } from './form-field';
import { FieldControlService } from './field-control.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [ FieldControlService ]
})
export class FormComponent implements OnInit {

  @Input() fields: FormField<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private fcs: FieldControlService) { }

  ngOnInit() {
    this.form = this.fcs.toFormGroup(this.fields);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
