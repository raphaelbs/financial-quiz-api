import { Injectable } from '@nestjs/common';
import { IEula } from './eula.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from '../base/base.service';
import { IEulaDto } from './eula.dto';

@Injectable()
export class EulaService extends BaseService<IEula, IEulaDto> {
  constructor(@InjectModel('Eula') private readonly eulaModel: Model<IEula>) {
    super(eulaModel);
  }
}
