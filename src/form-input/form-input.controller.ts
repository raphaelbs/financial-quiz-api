import { Controller } from '@nestjs/common';
import { BaseController } from '../base/base.controller';
import { IFormInput } from './form-input.interface';
import { IFormInputDto } from './form-input.dto';

@Controller('form-input')
export class FormInputController extends BaseController<
  IFormInput,
  IFormInputDto
> {}
