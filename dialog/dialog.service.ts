import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class DialogService {

  event$ = new ReplaySubject(1);

  constructor() { }

  show(id) {
    this.event$.next({id: id, action: 'show'});
  }

  hide(id) {
    this.event$.next({id: id, action: 'hide'});
  }

  set(id, name, value) {
    this.event$.next({id: id, action: 'set', name: name, value: value});
  }

}