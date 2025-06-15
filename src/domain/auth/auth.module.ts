import { Module } from '@nestjs/common';
import {JwtModule, JwtService} from "@nestjs/jwt";
import {EXPIRES_IN_JWT} from "@shared/constants/globals.constants";

import {AuthService} from "./core/service/auth.service";
import {AuthController} from "./adapters/incoming/handler/auth.controller";
import {UserModule} from "@users//users.module";
import {FindOneUserRepository} from "@users//adapters/outgoing/repository/find-one-user";
import {MongodbModule} from "@infrastructure/storage/mongodb/mongodb.module";


@Module({
    controllers: [AuthController],
    imports: [
        MongodbModule,
        JwtModule.register({
        secret: 'supersecreto',
        signOptions: { expiresIn: EXPIRES_IN_JWT },
    }),
    ],
    providers: [AuthService, UserModule, FindOneUserRepository],
})

export class AuthModule {}
