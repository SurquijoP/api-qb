import {Body, Controller, Post} from "@nestjs/common";

import {OrderService} from "../../../core/service/order.service";
import {OrderDto, OrderResponseDto} from "../../../core/domain/dto/order";
import {FilterInputPaginationDto, FilterRule} from "@shared/dto/filter-rule";
import {OrderControllerPort} from "../../../core/ports/in/controllers";
import {JwtClaims} from "@shared/decorator/jwt-claims.decorator";
import {TokenClaims} from "../../../../auth/core/domain/dto/user.login";

@Controller('orders')
export class OrderController implements  OrderControllerPort{
    constructor(private orderService: OrderService) {}

    @Post('find-order')
    async findOrders(@Body() body: FilterInputPaginationDto, @JwtClaims() user: TokenClaims) : Promise<OrderResponseDto> {
        try {
            return this.orderService.findOrders(body, user);
        } catch (error) {
            console.log(error);
        }
    }
}