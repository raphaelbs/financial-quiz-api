import 'jest';
import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { ObjectId } from 'bson';
import { IUserDto } from './user.dto';
import { MockModel } from '../db/mock.model';

describe('UserService', () => {
  let service: UserService;

  const userDtoMock = { id: new ObjectId().toHexString() } as IUserDto;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: 'UserModel',
          useValue: MockModel,
        },
      ],
    }).compile();
    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create user', async () => {
    expect.assertions(1);
    const user = await service.create(userDtoMock);
    expect(user).toEqual(userDtoMock);
  });
});
