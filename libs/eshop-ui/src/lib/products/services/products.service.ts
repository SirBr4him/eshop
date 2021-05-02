import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '@prisma/client';
import { Observable } from 'rxjs';
import { Store } from '../../store';
import { tap } from 'rxjs/operators';

@Injectable()
export class ProductsService {
  products$ = this.store.select<Product[]>('products');

  constructor(private http: HttpClient, private store: Store) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products').pipe(
      tap((products) => {
        this.store.set('products', products);
      })
    );
  }

  getCartItems(): Observable<Product[]> {
    return;
  }

  addToCart(item: Product) {}

  removeFromCart(itemId: string) {}
}
