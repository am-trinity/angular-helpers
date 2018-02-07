# angular-helpers

* Reactive forms: https://angular.io/guide/reactive-forms
* Dynamic form: https://angular.io/guide/dynamic-form
* Dynamic component loading: https://angular.io/guide/dynamic-component-loader

```typescript
import { Component, OnInit } from '@angular/core';

import { DialogService } from './dialog/dialog.service';

@Component({
  selector: 'app-dummy',
  template: `<p>Dummy</p>`
}) export class DummyComponent { }

@Component({
  selector: 'app-example',
  template: `
    <app-form [fields]="formFields"></app-form>
    
    <button (click)="handleButtonClick(event)">Show dialog</button>
    <app-dialog [dialogID]="dialogID"></app-dialog>
  `
})
export class ExampleComponent implements OnInit {

  dialogID = 'testDialog';

  formFields = [
    {
      type: 'string',
      name: 'username',
      label: 'User name',
      value: 'myname',
      order: 1
    }
  ];

  constructor(private dialog: DialogService) { }

  ngOnInit() { }

  handleButtonClick(event) {
    this.dialog.set(this.dialogID, 'component', DummyComponent);
    this.dialog.set(this.dialogID, 'params', {});
    this.dialog.show(this.dialogID);
  }

}
```

