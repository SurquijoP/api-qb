import {FilterRule} from "@shared/dto/filter-rule";
import {OrderDto} from "../../domain/dto/order";

export interface OderServicePort {
    findOrders(ordersFilters: FilterRule[]): Promise<OrderDto[]>
}