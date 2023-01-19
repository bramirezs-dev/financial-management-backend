import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const swaggerConfig = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('Financial')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
};

export default swaggerConfig;
