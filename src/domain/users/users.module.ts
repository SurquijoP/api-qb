import {FindOneUserRepository} from "@users//adapters/outgoing/repository/find-one-user";
import { Module } from '@nestjs/common';
import {MongodbModule} from "@infrastructure/storage/mongodb/mongodb.module";

@Module({
    imports: [MongodbModule],
    providers: [FindOneUserRepository],
})

export class UserModule {}
