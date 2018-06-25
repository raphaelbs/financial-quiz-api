import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { DynamicModule } from '@nestjs/common/interfaces';
import { UserSchema } from './user/user.schema';
import { EulaSchema } from './eula/eula.schema';
import { FormOutputSchema } from './form-output/form-output.schema';
import { FormInputSchema } from './form-input/form-input.schema';

export const Mongoose = {
  features: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    MongooseModule.forFeature([{ name: 'Eula', schema: EulaSchema }]),
    MongooseModule.forFeature([
      { name: 'FormOutput', schema: FormOutputSchema },
    ]),
    MongooseModule.forFeature([{ name: 'FormInput', schema: FormInputSchema }]),
  ] as DynamicModule[],
};
