import { Environment } from './enviroment';
import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  app.use(
    cors({
      origin: [
        'http://localhost:4200',
        'http://financial-quiz-app.s3-website-us-east-1.amazonaws.com/',
      ],
    }),
  );
  await app.listen(Environment.PORT);
}
bootstrap();
