import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
import { configureFilters } from './core/startup/filters';
import { configurePipes } from './core/startup/pipes';
import { configureSwagger } from './core/startup/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger:['debug', 'error', 'log', 'verbose']
  });
  app.enableCors();
  
  configurePipes(app);
  configureFilters(app);
  configureSwagger(app, 'Searcher API', 'short description', '1.0');

  const port = 3000;
  await app.listen(port);
}

bootstrap();
