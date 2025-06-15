import {BadRequestException, Inject, Injectable, UnauthorizedException} from "@nestjs/common";
import {LoggerCustomService} from "@shared/services/logger-custom.service";
import {GENERAL_ERROR_BAD_REQUEST, GENERAL_ERROR_NOT_FOUND} from "@shared/constants/errors";
import {FindOrdersRepository} from "../../adapters/outgoing/repository/find-orders";
import {FilterRule} from "@shared/dto/filter-rule";
import {OrderDto} from "../domain/dto/order";
import {ARGUMENTS} from "@shared/constants/logger";
import {OderServicePort} from "../ports/in/services";

@Injectable()
export class OrderService implements OderServicePort{
    private readonly logger: LoggerCustomService = new LoggerCustomService(
        OrderService.name,
    );
    constructor(
        @Inject()
        private readonly findOrderRepository: FindOrdersRepository,
    ) {}

    async findOrders(ordersFilters: FilterRule[]): Promise<OrderDto[]> {
        if (!ordersFilters?.length) {
            this.logger.warn("[findOrders] empty filters");
            throw new BadRequestException(GENERAL_ERROR_BAD_REQUEST)
        }
        /** TODO: Sacar el role del token para bsucar por seller_id */
        this.logger.log(ARGUMENTS, ordersFilters);
        const orders: OrderDto[] = await this.findOrderRepository.findOrders(ordersFilters);
        if (!orders || !orders.length) {
            this.logger.warn("[findOrders] not orders found for seller: ", ordersFilters);
            throw new UnauthorizedException(GENERAL_ERROR_NOT_FOUND)
        }
        return orders;
    }
}