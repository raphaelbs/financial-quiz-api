import { Environment } from './enviroment';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { UserController } from './user/user.controller';
import { EulaController } from './eula/eula.controller';
import { FormOutputController } from './form-output/form-output.controller';
import { FormInputController } from './form-input/form-input.controller';
import { FormInputTypeController } from './form-input-type/form-input-type.controller';
import { UserService } from './user/user.service';
import { Mongoose } from './mongoose.def';
import { EulaService } from './eula/eula.service';

/* tslint:disable:no-console */
console.info(
  `Iniciando DB em ${Environment.MONGO_CONNECTOR.replace(
    /\/\/.*?@/,
    '//',
  )}\nPorta: ${Environment.PORT}`,
);
/* tslint:enable:no-console */

@Module({
  imports: [
    MongooseModule.forRoot(Environment.MONGO_CONNECTOR),
    ...Mongoose.features,
  ],
  controllers: [
    AppController,
    UserController,
    EulaController,
    FormOutputController,
    FormInputController,
    FormInputTypeController,
  ],
  providers: [AppService, UserService, EulaService],
})
export class MainModule {}
