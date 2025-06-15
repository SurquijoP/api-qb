import {Body, Controller, Post} from "@nestjs/common";

import {OrderService} from "../../../core/service/order.service";
import {OrderDto} from "../../../core/domain/dto/order";
import {FilterRule} from "@shared/dto/filter-rule";
import {OrderControllerPort} from "../../../core/ports/in/controllers";

@Controller('orders')
export class OrderController implements  OrderControllerPort{
    constructor(private orderService: OrderService) {}

    @Post('find-order')
    async login(@Body() body: FilterRule[]) : Promise<OrderDto[]> {
        return this.orderService.findOrders(body);
    }
}