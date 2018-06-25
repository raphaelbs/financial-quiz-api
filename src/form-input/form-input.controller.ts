import { Controller } from '@nestjs/common';
import { BaseController } from '../base/base.controller';
import { IFormInput } from './form-input.interface';
import { IFormInputDto } from './form-input.dto';
import { FormInputService } from './form-input.service';

@Controller('form-input')
export class FormInputController extends BaseController<
  IFormInput,
  IFormInputDto
> {
  constructor(private readonly formInputService: FormInputService) {
    super(formInputService);
  }
}
