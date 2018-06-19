import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  await app.listen(process.env.PORT || 3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
