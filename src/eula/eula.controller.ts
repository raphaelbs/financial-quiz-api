import { Controller } from '@nestjs/common';
import { EulaService } from './eula.service';

@Controller('eula')
export class EulaController {
  constructor(private readonly eulaService: EulaService) {}
}
