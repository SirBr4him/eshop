import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '@prisma/client';

@Component({
  selector: 'eshop-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  items$: Observable<Product[]>;

  constructor() {}

  ngOnInit(): void {}
}
