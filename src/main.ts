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
  console.log("this is the config",configService)
  console.log("this is the port" , configService.get("port"))
  await app.listen(configService.get("port") || port);
}
bootstrap();
