import { Test, TestingModule } from '@nestjs/testing';
import { FormOutputService } from './form-output.service';

describe('FormOutputService', () => {
  let service: FormOutputService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormOutputService],
    }).compile();
    service = module.get<FormOutputService>(FormOutputService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
