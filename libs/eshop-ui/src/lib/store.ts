import { Injectable } from '@angular/core';
import { Product } from '@prisma/client';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';

export interface State {
  [key: string]: any;
  products: Product[];
}

const initialState: State = {
  products: undefined,
};

@Injectable({
  providedIn: 'root',
})
export class Store {
  private subject = new BehaviorSubject<State>(initialState);

  private store = this.subject.asObservable().pipe(distinctUntilChanged());

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pipe(pluck(name));
  }

  set(name: string, state: unknown) {
    this.subject.next({ ...this.value, [name]: state });
  }
}
