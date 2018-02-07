import { Component, OnInit, OnDestroy, AfterViewInit, Input } from '@angular/core';
import { DialogService } from './dialog.service';

import { Directive, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';

@Directive({
  selector: '[appDialogComponent]',
})
export class DialogComponentDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() dialogID = ['dialog', Math.floor(Math.random() * 10000).toString(), Date.now().toString()].join('-');
  isVisible;

  @ViewChild(DialogComponentDirective) dialogComponent: DialogComponentDirective;
  @Input() component;
  @Input() params;

  subs$ = [];

  constructor(private dialog: DialogService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.subs$.push(this.dialog.event$.subscribe(
      data => {
        if (data['id'] === this.dialogID) {
          switch (data['action']) {
            case 'show':
              this.isVisible = true;
              this.onDialogShow();
              break;
            case 'hide':
              this.isVisible = false;
              this.onDialogHide();
              break;
            case 'set':
              this[data['name']] = data['value'];
              this.onDialogChange();
          }
        }
      })
    );
  }

  ngAfterViewInit() {
    this.loadComponent();
  }

  ngOnDestroy() {
    this.subs$.forEach(_ => _.unsubscribe());
  }

  onDialogShow() {

  }

  onDialogHide() {

  }

  onDialogChange() {

  }

  onDialogClick(event) {

  }

  handleDialogClick(event) {
    const isExitControl = event.target.hasAttribute('_closeonclick');
    if (isExitControl) {
      this.dialog.hide(this.dialogID);
    } else {
      this.onDialogClick(event);
    }
  }

  loadComponent() {
    const viewContainerRef = this.dialogComponent.viewContainerRef;
    viewContainerRef.clear();

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);
    const componentRef = viewContainerRef.createComponent(componentFactory);

    Object.keys(this.params).forEach(
      k => {
        componentRef.instance[k] = this.params[k];
      }
    );
  }

}
