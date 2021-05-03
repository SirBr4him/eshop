import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import Dexie from 'dexie';

import { Store } from '../../store';
import { CartITem } from '../models/cart-item.interface';
import { DexieService } from './dexie.service';

@Injectable({ providedIn: 'root' })
export class CartService {
  cartItems$ = this.store.select<CartITem[]>('cart');

  private cart: Dexie.Table<CartITem>;

  constructor(private store: Store, private db: DexieService) {
    this.cart = this.db.table('cart');
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
