import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../models/product.interface';

@Component({
  selector: 'eshop-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  @Input()
  product: IProduct;
}
