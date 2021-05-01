import { Component, Input } from '@angular/core';
import { IProduct } from '../../models/product.interface';

@Component({
  selector: 'eshop-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input()
  product: IProduct;

  quantity = 1;
  private max = 10;
  private min = 1;

  add() {
    if (this.quantity < this.max) {
      this.quantity++;
    }
  }

  remove() {
    if (this.quantity > this.min) {
      this.quantity--;
    }
  }
}
