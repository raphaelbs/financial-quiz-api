import { Injectable } from '@nestjs/common';
import { BaseService } from 'base/base.service';
import { IFormInput } from './form-input.interface';
import { IFormInputDto } from './form-input.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class FormInputService extends BaseService<IFormInput, IFormInputDto> {
  constructor(
    @InjectModel('FormInput')
    private readonly formInputModel: Model<IFormInput>,
  ) {
    super(formInputModel);
  }
}
