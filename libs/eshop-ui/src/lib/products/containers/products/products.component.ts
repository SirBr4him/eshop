import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../models/product.interface';

@Component({
  selector: 'eshop-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$: Observable<IProduct[]>;

  constructor() {}

  ngOnInit(): void {}
}
