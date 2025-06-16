import {FilterInputPaginationDto} from "@shared/dto/filter-rule";
import {OrderResponseDto} from "../../domain/dto/order";
import {TokenClaims} from "../../../../auth/core/domain/dto/user.login";


export interface OrderControllerPort {
    findOrders(body: FilterInputPaginationDto, user: TokenClaims) : Promise<OrderResponseDto>
}