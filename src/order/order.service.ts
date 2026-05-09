import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entity/order.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Order)
        private readonly orderRepo: Repository<Order>,
    ) { }

    async create(data: CreateOrderDto) {
        const order = this.orderRepo.create(data);

        return this.orderRepo.save(order);
    }

    async findAll() {
        return this.orderRepo.find({
            order: {
                created_at: 'DESC',
            },
        });
    }

    async findOne(id: string) {
        const order = await this.orderRepo.findOne({
            where: { id },
        });

        if (!order) {
            throw new NotFoundException('Order not found');
        }

        return order;
    }
}
