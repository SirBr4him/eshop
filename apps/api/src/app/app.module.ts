import { Module } from '@nestjs/common';

import { ProductsModule } from '@eshop/products';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
