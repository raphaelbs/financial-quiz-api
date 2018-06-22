import { Test, TestingModule } from '@nestjs/testing';
import { FormInputTypeController } from './form-input-type.controller';

describe('FormInputType Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [FormInputTypeController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: FormInputTypeController = module.get<FormInputTypeController>(FormInputTypeController);
    expect(controller).toBeDefined();
  });
});
