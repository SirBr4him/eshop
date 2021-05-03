import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@prisma/client';

@Component({
  selector: 'eshop-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input()
  product: Product;
  @Output()
  removeItem = new EventEmitter<string>();

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

  deleteItem(id: string) {
    this.removeItem.emit(id);
  }
}
