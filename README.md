# angular-helpers

```typescript
import { Component, OnInit } from '@angular/core';

import { DialogService } from './dialog/dialog.service';

@Component({
  selector: 'app-dummy',
  template: '<p>Dummy</p>'
}) export class DummyComponent { }

@Component({
  selector: 'app-example',
  template: '
    <app-form [fields]="formFields"></app-form>
    
    <button (click)="handleButtonClick(event)">Show dialog</button>
    <app-dialog [dialogID]="'testDialog'" [component]="dialogComponent" [params]="dialogParams"></app-dialog>
  '
})
export class ExampleComponent implements OnInit {

  dialogComponent = DummyComponent;
  dialogParams = {};

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
    this.dialog.show('testDialog');
  }

}
```

