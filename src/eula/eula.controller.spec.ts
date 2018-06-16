import { Test, TestingModule } from '@nestjs/testing';
import { EulaController } from './eula.controller';

describe('Eula Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [EulaController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: EulaController = module.get<EulaController>(EulaController);
    expect(controller).toBeDefined();
  });
});
