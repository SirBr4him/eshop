import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../models/product.interface';

@Component({
  selector: 'eshop-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  items$: Observable<IProduct[]>;

  constructor() {}

  ngOnInit(): void {}
}
