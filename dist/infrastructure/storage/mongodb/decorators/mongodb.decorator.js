"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDBModuleConfig = void 0;
const process = require("process");
const mongoose_1 = require("@nestjs/mongoose");
const globals_constants_1 = require("../../../shared/constants/globals.constants");
exports.MongoDBModuleConfig = mongoose_1.MongooseModule.forRoot(process.env.MONGO_URL_SERVER, {
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASSWORD,
    dbName: process.env.DB,
    w: globals_constants_1.MAJORITY,
    retryWrites: true,
});
//# sourceMappingURL=mongodb.decorator.js.map