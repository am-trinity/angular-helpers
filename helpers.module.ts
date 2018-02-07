import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './form/form.component';
import { FormFieldComponent } from './form/form-field/form-field.component';
import { DialogComponent, DialogComponentDirective } from './dialog/dialog.component';
import { DialogService } from './dialog/dialog.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormComponent,
    FormFieldComponent,
    DialogComponent,
    DialogComponentDirective
  ],
  providers: [
    DialogService
  ],
  exports: [
    FormComponent,
    FormFieldComponent,
    DialogComponent
  ]
})
export class HelpersModule { }
