import { Injectable } from '@nestjs/common';
import { BaseService } from 'base/base.service';
import { IFormOutput } from './form-output.interface';
import { IFormOutputDto } from './form-output.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class FormOutputService extends BaseService<
  IFormOutput,
  IFormOutputDto
> {
  constructor(
    @InjectModel('FormOutput') private readonly formOutput: Model<IFormOutput>,
  ) {
    super(formOutput);
  }
}
