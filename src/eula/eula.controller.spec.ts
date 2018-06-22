import { Test, TestingModule } from '@nestjs/testing';
import { EulaController } from './eula.controller';
import { EulaService } from './eula.service';
import { EulaMock, EulaMockService } from './eula.mock';

describe('Eula Controller', () => {
  let module: TestingModule;
  let controller: EulaController;
  let eulaMock: EulaMock;

  beforeAll(async () => {
    eulaMock = new EulaMock();
    module = await Test.createTestingModule({
      controllers: [EulaController],
      providers: [
        { provide: EulaService, useValue: new EulaMockService(eulaMock) },
      ],
    }).compile();
    controller = module.get<EulaController>(EulaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(controller.findAll).toBeDefined();
    expect(controller.findById).toBeDefined();
    expect(controller.create).toBeDefined();
  });

  it('should find all eulas', async () => {
    expect.assertions(1);
    const eulas = await controller.findAll();
    expect(eulas).toEqual(eulaMock.iEulas);
  });

  it('should find eula by id', async () => {
    expect.assertions(2);

    const eula = eulaMock.iEulas[0];
    expect(await controller.findById(eula.id)).toEqual(eula);

    expect(await controller.findById(new Object().toString())).toEqual(
      undefined,
    );
  });
});
