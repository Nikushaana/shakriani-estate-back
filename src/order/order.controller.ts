import { Body, Controller, Post } from '@nestjs/common';
import { OrdersService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('orders')
export class OrderController {
    constructor(
        private readonly ordersService: OrdersService,
    ) { }

    @Post('')
    async createOrder(
        @Body() dto: CreateOrderDto,
    ) {
        return this.ordersService.create(dto);
    }
}
