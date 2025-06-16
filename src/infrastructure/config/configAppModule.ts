import { Module } from '@nestjs/common';
import { LoggerCustomService } from '@shared/services/logger-custom.service';
import { HttpModule } from '@nestjs/axios';
import { HttpModuleAsyncOptions } from '@nestjs/axios/dist/interfaces/http-module.interface';
import {APP_GUARD, Reflector} from "@nestjs/core";
import {JwtAuthGuard} from "@infrastructure/guard/jwt.guard";
import {JwtModule} from "@nestjs/jwt";

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 30000,
        maxRedirects: 5,
      }),
    } as HttpModuleAsyncOptions),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'supersecreto',
      signOptions: { expiresIn: '30d' },
    }),
  ],
  providers: [LoggerCustomService,Reflector,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },],
  exports: [LoggerCustomService, JwtModule],
})
export class ConfigAppModule {}
