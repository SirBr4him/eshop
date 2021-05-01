import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './containers/products/products.component';
import { CartComponent } from './containers/cart/cart.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { ProductComponent } from './containers/product/product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: ':productId',
    component: ProductsComponent,
  },
];

@NgModule({
  declarations: [
    ProductsComponent,
    CartComponent,
    ProductItemComponent,
    CartItemComponent,
    ProductComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProductsModule {}
