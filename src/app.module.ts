import { ConfigModule } from '@nestjs/config';
import { MongodbModule } from '@infrastructure/storage/mongodb/mongodb.module';
import {HealthModule} from "./domain/health/health.module";
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import {LoggerMiddleware} from "@infrastructure/config/logger.middleware";
import {ConfigAppModule} from "@infrastructure/config/configAppModule";
import {UserModule} from "@users//users.module";
import {AuthModule} from "./domain/auth/auth.module";



@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HealthModule,
    ConfigAppModule,
    MongodbModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}