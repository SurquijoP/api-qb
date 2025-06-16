import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import mongoose, {Model} from "mongoose";
import {Order, OrderDocument} from "../../../core/domain/schema/order.schema";
import {FilterInputPaginationDto, FilterRule} from "@shared/dto/filter-rule";
import {FindOrdersRepositoryPort} from "../../../core/ports/out/repositories";
import {OrderResponseDto} from "../../../core/domain/dto/order";
import {LoggerCustomService} from "@shared/services/logger-custom.service";

@Injectable()
export class FindOrdersRepository implements FindOrdersRepositoryPort{
    private readonly logger: LoggerCustomService = new LoggerCustomService(
        FindOrdersRepository.name,
    );
    constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {}

    async findOrders(ordersFilters: FilterInputPaginationDto): Promise<OrderResponseDto> {
       try {
           const skip = (ordersFilters.pagination.page - 1) * ordersFilters.pagination.pageSize;
           const pageSize = ordersFilters.pagination.pageSize;

           const orderFiltersMongo = this.buildOrderFilters(ordersFilters.filters);
           const [data, total] = await Promise.all([
               this.orderModel
                   .find(orderFiltersMongo)
                   .skip(skip)
                   .limit(pageSize)
                   .sort({ createdAt: -1 }),
               this.orderModel.countDocuments(orderFiltersMongo),
           ]);

           return { orders: data, total: total};
       } catch (err) {
           this.logger.error('[FindOrdersRepository]', err);
       }
    }

    buildOrderFilters(ordersFilters: FilterRule[]): any {
        const mongoFilter: any = {};
        const orConditions: any[] = [];
        for (const rule of ordersFilters) {
            const { key, value, type } = rule;

            if (!value || !value?.length) continue;

            switch (type) {
                case 'text':
                    mongoFilter[key] = { $regex: value, $options: 'i' };
                    break;

                case 'number':
                    mongoFilter[key] = Number(value);
                    break;

                case 'arr':
                    mongoFilter[key] = { $in: Array.isArray(value) ? value : [value] };
                    break;
                case 'searchValue':
                    orConditions.push(
                        { address: { $regex: value, $options: 'i' } },
                        { clientName: { $regex: value, $options: 'i' } }
                    );

                    if (mongoose.Types.ObjectId.isValid(value)) {
                        const objectId = new mongoose.Types.ObjectId(value);
                        orConditions.push(
                            {_id: objectId}
                        );
                    }
                default:
                    break;
            }
        }
        if (orConditions.length) {
            mongoFilter['$or'] = orConditions;
        }
        return mongoFilter;
    }
}