import {FilterInputPaginationDto, FilterRule} from "@shared/dto/filter-rule";
import {OrderDto, OrderResponseDto} from "../../domain/dto/order";

export interface OderServicePort {
    findOrders(ordersFilters: FilterInputPaginationDto): Promise<OrderResponseDto>
}