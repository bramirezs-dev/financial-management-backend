require('module-alias/register');

import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { env} from 'process';
import { AppModule } from './app.module';
import configs from '@configs';
import swaggerConfig from 'swagger/swaggerConfig';



const config = configs(env.NODE_ENV || 'dev');
const { port } = config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);
  swaggerConfig(app);
  app.enableCors();

  await app.listen(port);
}
bootstrap();
