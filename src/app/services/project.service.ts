import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  public observable: Subject<any>;

  constructor() {
    this.observable = new Subject<any>();
  }

  public setObservable(value: any) {
    this.observable.next(value);
    //.next => indicates that changing the object will reflect on whoever is subscribed to the observable
  }

  public getObservable(): Observable<any> {
    return this.observable.asObservable();
    // return the observable value and where do you sign up to receive the changes
  }
}
