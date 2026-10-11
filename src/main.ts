
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Konfigurasi validasi request
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  // Konfigurasi dokumentasi Swagger
  const config = new DocumentBuilder()
    .setTitle('WisataKu API')
    .setDescription(
      'API untuk platform informasi dan reservasi destinasi wisata',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/docs', app, document);

  // Simpan dokumentasi OpenAPI ke file JSON
  fs.writeFileSync(
    './openapi.json',
    JSON.stringify(document, null, 2),
  );

  // Jalankan server pada port 3000
  await app.listen(3000);
}

bootstrap();
