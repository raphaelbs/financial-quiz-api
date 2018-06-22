import { IEula } from './eula.interface';
import { IEulaDto } from './eula.dto';
import { IBaseService } from '../base/base.service.interface';
import { ObjectId } from 'bson';

export class EulaMock {
  readonly iEulas: IEula[];
  readonly userDtoMock: IEulaDto;
  constructor() {
    this.iEulas = [
      { id: new ObjectId().toHexString() } as IEula,
      {
        id: new ObjectId().toHexString(),
        label: 'label',
        eula: 'eula',
      } as IEula,
    ];
    this.userDtoMock = { id: this.iEulas[0].id } as IEulaDto;
  }
}

export class EulaMockService implements IBaseService<IEula, IEulaDto> {
  constructor(private eulaMock: EulaMock) {
    this.eulaMock = eulaMock;
  }

  create(): Promise<IEula> {
    return Promise.resolve(this.eulaMock.iEulas[0]);
  }
  findById(id: string): Promise<IEula> {
    return Promise.resolve(this.eulaMock.iEulas.filter(u => u.id === id)[0]);
  }
  findAll(): Promise<IEula[]> {
    return Promise.resolve(this.eulaMock.iEulas);
  }
}
