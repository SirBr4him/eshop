import { Component, OnInit } from '@angular/core';
import { CartService } from '@eshop/eshop-ui/core';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'eshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'shop-shoes';
  cartCount$: Observable<number>;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe();
    this.cartCount$ = this.cartService.cartItems$.pipe(
      filter((items) => !!items?.length),
      map((items) => items.length)
    );
  }
}
