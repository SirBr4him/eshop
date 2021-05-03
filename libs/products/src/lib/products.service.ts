import { Injectable } from '@nestjs/common';
import { PrismaClient, Product } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ProductsService {
  getProducts(): Promise<Product[]> {
    return prisma.product.findMany();
  }

  getProduct(productId: string): Promise<Product> {
    return prisma.product.findUnique({ where: { id: productId } });
  }
}
