import { Injectable } from '@nestjs/common';
import { BaseService } from 'base/base.service';
import { IFormOutput } from './form-output.interface';
import { IFormOutputDto } from './form-output.dto';

@Injectable()
export class FormOutputService extends BaseService<
  IFormOutput,
  IFormOutputDto
> {}
