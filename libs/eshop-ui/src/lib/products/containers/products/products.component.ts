import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '@prisma/client';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'eshop-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
  }
}
