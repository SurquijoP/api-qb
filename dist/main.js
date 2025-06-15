"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const process = require("process");
const logger_custom_service_1 = require("./infrastructure/shared/services/logger-custom.service");
const mongoose_1 = require("mongoose");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useLogger(app.get(logger_custom_service_1.LoggerCustomService));
    await app.startAllMicroservices();
    app.enableCors();
    app.setGlobalPrefix('api-qb');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    if (true)
        mongoose_1.default.set('debug', true);
    app.set('trust proxy', 'loopback');
    await app.listen(process.env.APP_PORT || 8000);
}
bootstrap();
//# sourceMappingURL=main.js.map