import {FilterInputPaginationDto} from "@shared/dto/filter-rule";
import {OrderResponseDto} from "../../domain/dto/order";


export interface OrderControllerPort {
    findOrders(body: FilterInputPaginationDto) : Promise<OrderResponseDto>
}