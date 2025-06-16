import {FilterInputPaginationDto, FilterRule} from "@shared/dto/filter-rule";
import {OrderResponseDto} from "../../domain/dto/order";

export interface FindOrdersRepositoryPort {
    findOrders(ordersFilters: FilterInputPaginationDto): Promise<OrderResponseDto>
}