import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { CartITem, CartService } from '@eshop/eshop-ui/core';

@Component({
  selector: 'eshop-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  items$: Observable<CartITem[]>;
  cartTotal$: Observable<number>;
  subs: Subscription;

  constructor(private cartService: CartService) {}

  private loadItems() {
    this.subs.add(this.cartService.getCartItems().subscribe());
  }

  ngOnInit(): void {
    this.subs = new Subscription();
    this.loadItems();
    this.items$ = this.cartService.cartItems$;
    this.cartTotal$ = this.cartService.cartItems$.pipe(
      filter((items) => !!items?.length),
      map((items) =>
        items.reduce(
          (total, { price, quantity }) => total + price * quantity,
          0
        )
      )
    );
  }

  updateItem(item: CartITem) {
    this.subs.add(
      this.cartService.updateCartItem(item).subscribe(() => {
        this.loadItems();
      })
    );
  }

  removeItem(id: string) {
    this.subs.add(
      this.cartService.removeFromCart(id).subscribe(() => {
        this.loadItems();
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
