import { Product } from '.prisma/client';
import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ProductsService } from './products.service';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  public async getProducts() {
    return await this.productsService.getProducts();
  }

  @Get(':id')
  public async getProduct(@Param() params) {
    return await this.productsService.getProduct(params.id);
  }
}
