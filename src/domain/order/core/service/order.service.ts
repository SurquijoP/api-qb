import {BadRequestException, Inject, Injectable, NotFoundException, UnauthorizedException} from "@nestjs/common";
import {LoggerCustomService} from "@shared/services/logger-custom.service";
import {GENERAL_ERROR_BAD_REQUEST, GENERAL_ERROR_NOT_FOUND} from "@shared/constants/errors";
import {FindOrdersRepository} from "../../adapters/outgoing/repository/find-orders";
import {FilterInputPaginationDto, FilterRule} from "@shared/dto/filter-rule";
import {OrderDto, OrderResponseDto} from "../domain/dto/order";
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

    async findOrders(ordersFilters: FilterInputPaginationDto): Promise<OrderResponseDto> {
        const isValid = this.validateOrderFilters(ordersFilters);
        if (!isValid) {
            this.logger.error("[findOrders] bad filters");
            throw new BadRequestException(GENERAL_ERROR_BAD_REQUEST)
        }

        /** TODO: Sacar el role del token para bsucar por seller_id */
        this.logger.log(ARGUMENTS, ordersFilters);
        const ordersResponse = await this.findOrderRepository.findOrders(ordersFilters);
        if (!ordersResponse?.orders || !ordersResponse?.orders?.length) {
            this.logger.warn("[findOrders] not orders found for seller: ", ordersFilters);
            throw new NotFoundException(GENERAL_ERROR_NOT_FOUND)
        }
        return ordersResponse;
    }

    validateOrderFilters(filters: FilterInputPaginationDto) : boolean {
        let isValid = true;

        const isSearchBar = filters.filters.find((rule) => rule.type === 'searchValue');
        const isSearchBarConflict = filters.filters.find((rule) => rule.key === 'address' || rule.key === '_id' || rule.key === 'clientName');

        if (isSearchBar && isSearchBarConflict) { isValid = false}

        if (!filters.pagination?.page && !filters.pagination?.pageSize) isValid = false
        return isValid;
    }
}