import { IBaseService } from '../base/base.service.interface';
import { ObjectId } from 'bson';
import { IFormInput } from './form-input.interface';
import { IFormInputDto } from './form-input.dto';

export class FormInputMock {
  readonly iFormInputs: IFormInput[];
  readonly formInputDtoMock: IFormInputDto;
  constructor() {
    this.iFormInputs = [];
    this.formInputDtoMock = {} as IFormInputDto;
  }
}

export class FormInputMockService
  implements IBaseService<IFormInput, IFormInputDto> {
  constructor(private eulaMock: FormInputMock) {
    this.eulaMock = eulaMock;
  }

  create(): Promise<IFormInput> {
    return Promise.resolve(this.eulaMock.iFormInputs[0]);
  }
  findById(id: string): Promise<IFormInput> {
    return Promise.resolve(
      this.eulaMock.iFormInputs.filter(u => u.id === id)[0],
    );
  }
  findAll(): Promise<IFormInput[]> {
    return Promise.resolve(this.eulaMock.iFormInputs);
  }
}
