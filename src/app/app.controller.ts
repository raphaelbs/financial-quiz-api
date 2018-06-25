import { Get, Controller } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  root(): string {
    return `Visite https://github.com/raphaelbs/financial-quiz-api/wiki/ para mais informações.`;
  }
}
