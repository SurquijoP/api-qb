"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const config_1 = require("@nestjs/config");
const mongodb_module_1 = require("./infrastructure/storage/mongodb/mongodb.module");
const health_module_1 = require("./domain/health/health.module");
const common_1 = require("@nestjs/common");
const logger_middleware_1 = require("./infrastructure/config/logger.middleware");
const configAppModule_1 = require("./infrastructure/config/configAppModule");
const users_module_1 = require("./domain/users/users.module");
const auth_module_1 = require("./domain/auth/auth.module");
const order_module_1 = require("./domain/order/order.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            health_module_1.HealthModule,
            configAppModule_1.ConfigAppModule,
            mongodb_module_1.MongodbModule,
            users_module_1.UserModule,
            auth_module_1.AuthModule,
            order_module_1.OrderModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map