import {FilterInputPaginationDto, FilterRule} from "@shared/dto/filter-rule";
import {OrderResponseDto} from "../../domain/dto/order";
import {TokenClaims} from "../../../../auth/core/domain/dto/user.login";

export interface OderServicePort {
    findOrders(ordersFilters: FilterInputPaginationDto, user: TokenClaims): Promise<OrderResponseDto>
}