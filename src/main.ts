require('module-alias/register');
import { env} from 'process';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import configs from '@configs';



const config = configs(env.NODE_ENV || 'dev');
console.log('este es el enviroment',env.NODE_ENV)
const { port } = config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);
  await app.listen(port);
}
bootstrap();
