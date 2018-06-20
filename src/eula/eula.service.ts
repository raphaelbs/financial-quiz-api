import { Injectable } from '@nestjs/common';
import { IEula } from './eula.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EulaService {
  constructor(@InjectModel('Eula') private readonly userModel: Model<IEula>) {}
}
