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
        ],
        providers: [logger_custom_service_1.LoggerCustomService],
        exports: [logger_custom_service_1.LoggerCustomService],
    })
], ConfigAppModule);
//# sourceMappingURL=configAppModule.js.map