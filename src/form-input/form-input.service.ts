import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'base/base.service';
import { IFormInput } from './form-input.interface';
import { IFormInputDto } from './form-input.dto';
import { Model } from 'mongoose';

@Injectable()
export class FormInputService extends BaseService<IFormInput, IFormInputDto> {
  constructor(
    @Inject('FormInput') private readonly formInputModel: Model<IFormInput>,
  ) {
    super(formInputModel);
  }
}
