import { Controller } from '@nestjs/common';
import { EulaService } from './eula.service';
import { IEula } from './eula.interface';
import { IEulaDto } from './eula.dto';
import { BaseController } from '../base/base.controller';

@Controller('eula')
export class EulaController extends BaseController<IEula, IEulaDto> {
  constructor(private readonly eulaService: EulaService) {
    super(eulaService);
  }
}
