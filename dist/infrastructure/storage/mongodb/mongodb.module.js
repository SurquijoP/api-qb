"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongodbModule = void 0;
const common_1 = require("@nestjs/common");
const mongodb_decorator_1 = require("./decorators/mongodb.decorator");
const mongoose_1 = require("@nestjs/mongoose");
const users_schema_1 = require("../../../domain/users/core/domain/schema/users.schema");
const globals_constants_1 = require("../../shared/constants/globals.constants");
const order_schema_1 = require("../../../domain/order/core/domain/schema/order.schema");
let MongodbModule = class MongodbModule {
};
exports.MongodbModule = MongodbModule;
exports.MongodbModule = MongodbModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongodb_decorator_1.MongoDBModuleConfig,
            mongoose_1.MongooseModule.forFeature([{ name: users_schema_1.User.name, schema: users_schema_1.UserSchema, collection: globals_constants_1.USERS_COLLECTION }]),
            mongoose_1.MongooseModule.forFeature([{ name: order_schema_1.Order.name, schema: order_schema_1.OrderSchema, collection: globals_constants_1.ORDERS_COLLECTION }]),
        ],
        exports: [mongoose_1.MongooseModule],
    })
], MongodbModule);
//# sourceMappingURL=mongodb.module.js.map