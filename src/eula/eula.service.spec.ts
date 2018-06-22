import { Test, TestingModule } from '@nestjs/testing';
import { EulaService } from './eula.service';
import { MockModel } from '../base/base.mock.model';
import { IEula } from './eula.interface';
import { ObjectId } from 'bson';

describe('EulaService', () => {
  let service: EulaService;

  const eulas = [
    { id: new ObjectId(), label: 'Eula1', eula: 'lorem ipsum' } as IEula,
  ];

  class EulaModel extends MockModel<IEula> {
    constructor() {
      super(eulas[0]);
    }
  }

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EulaService,
        {
          provide: 'EulaModel',
          useValue: EulaModel,
        },
      ],
    }).compile();
    service = module.get<EulaService>(EulaService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
