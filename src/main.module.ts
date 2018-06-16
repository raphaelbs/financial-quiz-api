import { Environment } from './enviroment';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { UserController } from './user/user.controller';
import { EulaController } from './eula/eula.controller';


/* tslint:disable:no-console */
console.info(
  `Iniciando DB em ${Environment.MONGO_CONNECTOR.replace(
    /\/\/.*?@/,
    '//',
  )}\nPorta: ${Environment.PORT}`,
);
/* tslint:enable:no-console */

@Module({
  imports: [MongooseModule.forRoot(Environment.MONGO_CONNECTOR)],
  controllers: [AppController, UserController, EulaController],
  providers: [AppService],
})
export class MainModule {}
