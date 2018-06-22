import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { DynamicModule } from '@nestjs/common/interfaces';
import { UserSchema } from './user/user.schema';
import { EulaSchema } from './eula/eula.schema';

export const Mongoose = {
  features: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    MongooseModule.forFeature([{ name: 'Eula', schema: EulaSchema }]),
  ] as DynamicModule[],
};
