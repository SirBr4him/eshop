import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from '@prisma/client';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'eshop-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;
  subs: Subscription;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.subs = new Subscription();
    this.subs.add(this.productsService.getProducts().subscribe());
    this.products$ = this.productsService.products$;
  }
}
