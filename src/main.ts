import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as process from 'process';
import { LoggerCustomService } from '@infrastructure/shared/services/logger-custom.service';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useLogger(app.get(LoggerCustomService));

  await app.startAllMicroservices();

  app.enableCors();
  app.setGlobalPrefix('api-qb');
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  app.set('trust proxy', 'loopback');
  await app.listen(process.env.APP_PORT || 8000);
}

bootstrap();
