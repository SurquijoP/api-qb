import {Module} from "@nestjs/common";
import {MongodbModule} from "@infrastructure/storage/mongodb/mongodb.module";
import {OrderController} from "./adapters/incoming/handler/order.controller";
import {OrderService} from "./core/service/order.service";
import {FindOrdersRepository} from "./adapters/outgoing/repository/find-orders";

@Module({
    controllers: [OrderController],
    imports: [
        MongodbModule,
    ],
    providers: [OrderService, FindOrdersRepository],
})

export class OrderModule {}
