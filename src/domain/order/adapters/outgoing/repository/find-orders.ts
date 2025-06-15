import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Order, OrderDocument} from "../../../core/domain/schema/order.schema";
import {FilterRule} from "@shared/dto/filter-rule";
import {FindOrdersRepositoryPort} from "../../../core/ports/out/repositories";

@Injectable()
export class FindOrdersRepository implements FindOrdersRepositoryPort{
    constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {}

    async findOrders(ordersFilters: FilterRule[]): Promise<Order[] | null> {
        const orderFiltersMongo = this.buildOrderFilters(ordersFilters);
        return this.orderModel.find(orderFiltersMongo).exec();
    }

    buildOrderFilters(ordersFilters: FilterRule[]): any {
    }
}