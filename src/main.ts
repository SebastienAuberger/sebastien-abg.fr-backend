import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  let corsOptions : CorsOptions = {
    origin: "http://localhost:5173"
  }
  app.enableCors(corsOptions)
  const config = new DocumentBuilder()
    .setTitle('Personal Website Backend')
    .setDescription('Backend for http://www.sebastien-abg.fr')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-doc', app, document);
  await app.listen(3000);
}
bootstrap();
