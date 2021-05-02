import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '@prisma/client';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products');
  }

  getCartItems(): Observable<Product[]> {
    return;
  }

  addToCart(item: Product) {}

  removeFromCart(itemId: string) {}
}
