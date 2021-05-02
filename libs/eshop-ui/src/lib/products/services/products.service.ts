import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../models/product.interface';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return;
  }

  getCartItems(): Observable<IProduct[]> {
    return;
  }

  addToCart(item: IProduct) {}

  removeFromCart(itemId: string) {}
}
