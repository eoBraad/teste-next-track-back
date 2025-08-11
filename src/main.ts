import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import open from 'open';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  });

  const config = new DocumentBuilder()
    .setTitle('API de Gestão de Tarefas')
    .setDescription('Documentação da API de gestão de tarefas utilizando NestJS e Prisma')
    .setVersion('1.0')
    .addTag('tarefas')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  app.useGlobalPipes(new ValidationPipe())
  await app.listen(process.env.PORT ?? 3000);

  await open(app.getHttpServer() + '/api-docs');
}
bootstrap();
