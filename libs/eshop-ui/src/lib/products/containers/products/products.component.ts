import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from '@prisma/client';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'eshop-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  products$: Observable<Product[]>;
  subs: Subscription;

  constructor(private productsService: ProductsService) {}

  private loadProducts() {
    this.subs.add(this.productsService.getProducts().subscribe());
  }

  ngOnInit(): void {
    this.subs = new Subscription();
    this.loadProducts();
    this.products$ = this.productsService.products$;
  }

  addToCart(product: Product) {
    this.subs.add(this.productsService.addToCart(product).subscribe());
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
