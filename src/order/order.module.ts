import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entity/order.entity';
import { OrdersService } from './order.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order]),
  ],
  providers: [OrdersService],
  exports: [OrdersService],
  controllers: [OrderController]
})
export class OrderModule { }
