"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigAppModule = void 0;
const common_1 = require("@nestjs/common");
const logger_custom_service_1 = require("../shared/services/logger-custom.service");
const axios_1 = require("@nestjs/axios");
const core_1 = require("@nestjs/core");
const jwt_guard_1 = require("../guard/jwt.guard");
const jwt_1 = require("@nestjs/jwt");
let ConfigAppModule = class ConfigAppModule {
};
exports.ConfigAppModule = ConfigAppModule;
exports.ConfigAppModule = ConfigAppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule.registerAsync({
                useFactory: () => ({
                    timeout: 30000,
                    maxRedirects: 5,
                }),
            }),
            jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET || 'supersecreto',
                signOptions: { expiresIn: '30d' },
            }),
        ],
        providers: [logger_custom_service_1.LoggerCustomService, core_1.Reflector,
            {
                provide: core_1.APP_GUARD,
                useClass: jwt_guard_1.JwtAuthGuard,
            },],
        exports: [logger_custom_service_1.LoggerCustomService, jwt_1.JwtModule],
    })
], ConfigAppModule);
//# sourceMappingURL=configAppModule.js.map