import { Module } from '@nestjs/common';
import { LoggerCustomService } from '@shared/services/logger-custom.service';
import { HttpModule } from '@nestjs/axios';
import { HttpModuleAsyncOptions } from '@nestjs/axios/dist/interfaces/http-module.interface';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 30000,
        maxRedirects: 5,
      }),
    } as HttpModuleAsyncOptions),
  ],
  providers: [LoggerCustomService],
  exports: [LoggerCustomService],
})
export class ConfigAppModule {}
