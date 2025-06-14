import * as process from "process";
import {MongooseModule} from "@nestjs/mongoose";
import { MAJORITY} from "@shared/constants/globals.constants";


export const MongoDBModuleConfig = MongooseModule.forRoot(process.env.MONGO_URL_SERVER, {
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASSWORD,
    dbName: process.env.DB,
    w: MAJORITY,
    retryWrites: true,
})
