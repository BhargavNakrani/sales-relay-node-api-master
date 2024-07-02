import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  // app.use(passport.initialize());

  const config = new DocumentBuilder()
    .setTitle('Sales-relay')
    .addBearerAuth()
    .setDescription('The Sales-relay API description2')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: '*',
    credentials: true,
  });

  // // Initialize the firebase admin app
  // admin.initializeApp({
  //   credential: admin.credential.cert('./resource/serviceAccountKey.json'),
  // });

  await app.listen(process.env.PORT ?? 1600);

  console.log(`Nest App Started on ${process.env.PORT ?? 1600}`);
  console.log(`http://localhost:${process.env.PORT ?? 1600}/api/`);
}
bootstrap();
