import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@prisma/client';

@Component({
  selector: 'eshop-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  @Input()
  product: Product;

  @Output()
  addToCart = new EventEmitter<Product>();

  addProductToCart(item: Product) {
    this.addToCart.emit(item);
  }
}
