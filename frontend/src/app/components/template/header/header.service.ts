import { Injectable } from '@angular/core';
import { Headerdata } from './header.data.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerData = new BehaviorSubject<Headerdata>({
    title: 'test',
    icon: 'home',
    routerUrl: ''
  })

  constructor() { }

  get headerData(): Headerdata {
    return this._headerData.value;
  }

  set headerData(headerData: Headerdata) {
      this._headerData.next(headerData);
  }
}
