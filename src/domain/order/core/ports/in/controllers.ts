import {FilterRule} from "@shared/dto/filter-rule";
import {OrderDto} from "../../domain/dto/order";

export interface OrderControllerPort {
    login(body: FilterRule[]) : Promise<OrderDto[]>
}