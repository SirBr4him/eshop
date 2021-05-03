import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '@prisma/client';
import { from, Observable } from 'rxjs';
import Dexie from 'dexie';
import { tap } from 'rxjs/operators';

import { Store } from '../../store';
import { DexieService } from '../../core/services/dexie.service';
import { CartITem } from '../models/cart-item.interface';

@Injectable()
export class ProductsService {
  products$ = this.store.select<Product[]>('products');
  product$ = this.store.select<Product>('product');
  cartItems$ = this.store.select<CartITem[]>('cart');

  private cart: Dexie.Table<CartITem>;

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

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`/api/products/${id}`).pipe(
      tap((product) => {
        this.store.set('product', product);
      })
    );
  }

  getCartItems(): Observable<CartITem[]> {
    return from(this.cart.toArray()).pipe(
      tap((items) => {
        this.store.set('cart', items);
      })
    );
  }

  addToCart(item: CartITem): Observable<CartITem> {
    return from(this.cart.add(item));
  }

  updateCartItem(item: CartITem): Observable<number> {
    const { id } = item;
    return from(this.cart.update(id, item));
  }

  removeFromCart(itemId: string): Observable<void> {
    return from(this.cart.delete(itemId));
  }
}
