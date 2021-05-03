import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { CartITem } from '../../models/cart-item.interface';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'eshop-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  items$: Observable<CartITem[]>;
  cartTotal$: Observable<number>;
  subs: Subscription;

  constructor(private productsService: ProductsService) {}

  private loadItems() {
    this.subs.add(this.productsService.getCartItems().subscribe());
  }

  ngOnInit(): void {
    this.subs = new Subscription();
    this.loadItems();
    this.items$ = this.productsService.cartItems$;
    this.cartTotal$ = this.productsService.cartItems$.pipe(
      filter((items) => !!items?.length),
      map((items) =>
        items.reduce(
          (total, { price, quantity }) => total + price * quantity,
          0
        )
      ),
      tap((tot) => {
        console.log(tot);
      })
    );
  }

  updateItem(item: CartITem) {
    this.subs.add(
      this.productsService.updateCartItem(item).subscribe(() => {
        this.loadItems();
      })
    );
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
