import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import corsOptions from '../config/corsOptions';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const whitelist = configService.get('server.allowed_sources');
  app.use(helmet());
  app.enableCors(corsOptions(whitelist));
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(configService.get('server.port'));
}
bootstrap();
