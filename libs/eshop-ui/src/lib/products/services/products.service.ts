import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '@prisma/client';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Store } from '../../store';

@Injectable()
export class ProductsService {
  products$ = this.store.select<Product[]>('products');
  product$ = this.store.select<Product>('product');

  constructor(private http: HttpClient, private store: Store) {}

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
}
