import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_CONNECTOR || 'mongodb://localhost/financialquiz')],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
