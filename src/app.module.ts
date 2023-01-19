import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import configs from '@configs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { env } from 'process';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configs(env.NODE_ENV || 'dev')],
      isGlobal:true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
