import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { corsConfig } from './config/cors.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(corsConfig);

  // Starts listening for shutdown hooks
  app.enableShutdownHooks();

  // Set a global prefix for all routes
  app.setGlobalPrefix('api/v1');

  await app.listen(4300);
}
bootstrap().catch((err) => console.error('Error starting server:', err));
