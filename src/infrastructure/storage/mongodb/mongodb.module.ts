import {Module} from '@nestjs/common';
import {MongoDBModuleConfig} from "@infrastructure/storage/mongodb/decorators/mongodb.decorator";
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "@users//core/domain/schema/users.schema";
import {USERS_COLLECTION} from "@shared/constants/globals.constants";

@Module({
    imports: [
        MongoDBModuleConfig,
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema, collection: USERS_COLLECTION }]),
    ],
    exports: [MongooseModule],
})
export class MongodbModule {
}
