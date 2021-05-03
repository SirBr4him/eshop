import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartITem } from '../../models/cart-item.interface';

@Component({
  selector: 'eshop-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input()
  item: CartITem;
  @Output()
  itemRemoved = new EventEmitter<string>();
  @Output()
  itemUpdated = new EventEmitter<CartITem>();

  private max = 10;
  private min = 1;

  private updateItem(quantity: number) {
    this.item = { ...this.item, quantity };
    this.itemUpdated.emit(this.item);
  }

  addQuantity() {
    let { quantity } = this.item;
    if (quantity < this.max) {
      quantity++;
      this.updateItem(quantity);
    }
  }

  removeQuantity() {
    let { quantity } = this.item;
    if (quantity > this.min) {
      quantity--;
      this.updateItem(quantity);
    }
  }

  removeItem(id: string) {
    this.itemRemoved.emit(id);
  }
}
