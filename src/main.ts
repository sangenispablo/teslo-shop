import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');
  // esto le antepone a todos mis endpoints el /api/
  app.setGlobalPrefix('api');
  // esto configura de forma global la validacion con los Pipes en los DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      // Puedo usar esto para transformar los parametros del query
      // transform: true,
      // transformOptions: {
      //   enableImplicitConversion: true,
      // },
    }),
  );
  await app.listen(process.env.PORT);
  logger.log(`App running on port ${process.env.PORT}`);
}
bootstrap();
