import {Module} from '@nestjs/common';
import {MongoDBModuleConfig} from "@infrastructure/storage/mongodb/decorators/mongodb.decorator";
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "@users//core/domain/schema/users.schema";
import {ORDERS_COLLECTION, USERS_COLLECTION} from "@shared/constants/globals.constants";
import {Order, OrderSchema} from "../../../domain/order/core/domain/schema/order.schema";

@Module({
    imports: [
        MongoDBModuleConfig,
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema, collection: USERS_COLLECTION }]),
        MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema, collection: ORDERS_COLLECTION }]),
    ],
    exports: [MongooseModule],
})
export class MongodbModule {
}
