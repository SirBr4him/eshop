import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ProductsComponent } from './containers/products/products.component';
import { CartComponent } from './containers/cart/cart.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { ProductComponent } from './containers/product/product.component';
import { ProductsService } from './services/products.service';

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
    component: ProductComponent,
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
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  providers: [ProductsService],
})
export class ProductsModule {}
