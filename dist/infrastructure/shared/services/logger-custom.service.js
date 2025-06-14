"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerCustomService = exports.LOGGER = void 0;
const common_1 = require("@nestjs/common");
exports.LOGGER = {
    INIT: '[INIT]',
    DATA: '[DATA]',
    END: '[END]',
    ERROR: '[ERROR]',
    DEAD: '[TASK DEAD]',
    RETRY: '[TASK RETRY]',
    REDIS_ERROR: '[ERROR]',
    REDIS_OK: 'REDIS CONNECT OK',
    REDIS_CONNECTION_EXIST: 'This user has an open connection: ',
};
let LoggerCustomService = class LoggerCustomService extends common_1.ConsoleLogger {
    constructor(clazz) {
        super();
        this.nameClazz = clazz;
    }
    info(method, message, data) {
        let logger = `: [${method}] `;
        if (message !== null) {
            logger += `-> ${message}`;
        }
        if (data !== null && data !== undefined) {
            logger += ` -> data = ${JSON.stringify(data)}`;
        }
        super.log(logger, this.nameClazz);
    }
    debug(method, message, data) {
        let logger = `: [${method}] `;
        if (message !== null) {
            logger += `-> ${message}`;
        }
        if (data !== null && data !== undefined) {
            logger += ` -> data = ${JSON.stringify(data)}`;
        }
        super.debug(logger, this.nameClazz);
    }
    errors(method, message, trace) {
        super.error(`[${method}] -> ${exports.LOGGER.ERROR} -> ${JSON.stringify(message)}`, `${trace}`, this.nameClazz);
    }
};
exports.LoggerCustomService = LoggerCustomService;
exports.LoggerCustomService = LoggerCustomService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [String])
], LoggerCustomService);
//# sourceMappingURL=logger-custom.service.js.map