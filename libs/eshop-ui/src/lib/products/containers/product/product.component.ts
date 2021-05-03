import { Product } from '.prisma/client';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { CartService } from '@eshop/eshop-ui/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'eshop-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product$: Observable<Product>;

  subs: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  private loadProduct() {
    this.subs.add(
      this.route.paramMap
        .pipe(
          filter((params) => !!params.get('productId')),
          map((params) => params.get('productId')),
          switchMap((id) => this.productsService.getProduct(id))
        )
        .subscribe()
    );
  }

  ngOnInit(): void {
    this.subs = new Subscription();
    this.loadProduct();
    this.product$ = this.productsService.product$;
  }

  addProductToCart(product: Product) {
    this.cartService.addToCart({ ...product, quantity: 1 });
  }
}
