import {Module} from '@nestjs/common';
import {MongoDBModuleConfig} from "@infrastructure/storage/mongodb/decorators/mongodb.decorator";

@Module({
    imports: [
        MongoDBModuleConfig
    ]
})
export class MongodbModule {
}
