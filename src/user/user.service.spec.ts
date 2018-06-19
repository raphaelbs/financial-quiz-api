import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { IUser } from './user.interface';
import { ObjectId } from 'bson';
import 'jest';
import { IUserDto } from './user.dto';
import { getModelToken } from '@nestjs/mongoose';

describe('UserService', () => {
  let service: UserService;

  const userMock = {
    _id: new ObjectId(),
  } as IUser;
  const userDtoMock = {
    id: userMock._id,
  } as IUserDto;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, {
        provide: getModelToken('User'),
        useValue: userMock,
      }],
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
