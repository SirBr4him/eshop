import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from '@prisma/client';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'eshop-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  items$: Observable<Product[]>;
  subs: Subscription;

  constructor(private productsService: ProductsService) {}

  private loadItems() {
    this.subs.add(this.productsService.getCartItems().subscribe());
  }

  ngOnInit(): void {
    this.subs = new Subscription();
    this.items$ = this.productsService.cartItems$;
  }

  removeItem(id: string) {
    this.subs.add(
      this.productsService.removeFromCart(id).subscribe(() => {
        this.loadItems();
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
