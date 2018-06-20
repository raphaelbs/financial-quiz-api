import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { DynamicModule } from '@nestjs/common/interfaces';
import { UserSchema } from '../user/user.schema';

export const Mongoose = {
  features: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ] as DynamicModule[],
};
