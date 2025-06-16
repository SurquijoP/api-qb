import { ConfigModule } from '@nestjs/config';
import { MongodbModule } from '@infrastructure/storage/mongodb/mongodb.module';
import {HealthModule} from "./domain/health/health.module";
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import {LoggerMiddleware} from "@infrastructure/config/logger.middleware";
import {ConfigAppModule} from "@infrastructure/config/configAppModule";
import {UserModule} from "@users//users.module";
import {AuthModule} from "./domain/auth/auth.module";
import {OrderModule} from "./domain/order/order.module";
import {JwtAuthGuard} from "@infrastructure/guard/jwt.guard";
import { APP_GUARD } from '@nestjs/core';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HealthModule,
    ConfigAppModule,
    MongodbModule,
    UserModule,
    AuthModule,
    OrderModule,

  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}