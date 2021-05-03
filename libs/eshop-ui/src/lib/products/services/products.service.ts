import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '@prisma/client';
import { from, Observable } from 'rxjs';
import Dexie from 'dexie';
import { tap } from 'rxjs/operators';

import { Store } from '../../store';
import { DexieService } from '../../core/services/dexie.service';

@Injectable()
export class ProductsService {
  products$ = this.store.select<Product[]>('products');
  cartItems$ = this.store.select<Product[]>('cart');

  private cart: Dexie.Table<Product>;

  constructor(
    private http: HttpClient,
    private store: Store,
    private db: DexieService
  ) {
    this.cart = this.db.table('cart');
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products').pipe(
      tap((products) => {
        this.store.set('products', products);
      })
    );
  }

  getCartItems(): Observable<Product[]> {
    return from(this.cart.toArray()).pipe(
      tap((items) => {
        this.store.set('cart', items);
      })
    );
  }

  addToCart(item: Product): Observable<Product> {
    return from(this.cart.add(item));
  }

  removeFromCart(itemId: string): Observable<void> {
    return from(this.cart.delete(itemId));
  }
}
