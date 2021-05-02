import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Store } from './store';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: async () =>
      (await import('./products/products.module')).ProductsModule,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  providers: [Store],
})
export class EshopUiModule {}
