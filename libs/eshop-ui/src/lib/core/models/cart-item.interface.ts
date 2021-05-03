import { Product } from '.prisma/client';

export interface CartITem extends Product {
  quantity: number;
}
