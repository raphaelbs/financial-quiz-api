import { Controller } from '@nestjs/common';
import { BaseController } from '../base/base.controller';
import { IFormOutput } from './form-output.interface';
import { IFormOutputDto } from './form-output.dto';
import { FormOutputService } from './form-output.service';

@Controller('form-output')
export class FormOutputController extends BaseController<
  IFormOutput,
  IFormOutputDto
> {
  constructor(private formOutputService: FormOutputService) {
    super(formOutputService);
  }
}
