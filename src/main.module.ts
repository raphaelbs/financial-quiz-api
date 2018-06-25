import { Environment } from './enviroment';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from './mongoose.def';

import { AppController } from './app/app.controller';

import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

import { EulaController } from './eula/eula.controller';
import { EulaService } from './eula/eula.service';

import { FormOutputController } from './form-output/form-output.controller';
import { FormOutputService } from './form-output/form-output.service';

import { FormInputController } from './form-input/form-input.controller';
import { FormInputService } from './form-input/form-input.service';

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
  ],
  providers: [UserService, EulaService, FormOutputService, FormInputService],
})
export class MainModule {}
