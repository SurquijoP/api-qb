import {FilterRule} from "@shared/dto/filter-rule";
import {Order} from "../../domain/schema/order.schema";

export interface FindOrdersRepositoryPort {
    findOrders(ordersFilters: FilterRule[]): Promise<Order[] | null>
}