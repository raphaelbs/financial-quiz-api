import 'jest';
import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { ObjectId } from 'bson';
import { DocumentQuery } from 'mongoose';
import { IUserDto } from './user.dto';
import { MockModel } from '../db/mock.model';
import { IUser } from './user.interface';

describe('UserService', () => {
  let service: UserService;

  const iUser = { id: new ObjectId().toHexString() } as IUser;
  const iUsers = [iUser];
  const userDtoMock = { id: iUser.id } as IUserDto;

  class UserModel extends MockModel<IUser> {
    constructor() {
      super(iUser);
    }
  }

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: 'UserModel',
          useValue: UserModel,
        },
      ],
    }).compile();
    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(service.create).toBeDefined();
    expect(service.eulaAccept).toBeDefined();
    expect(service.findAll).toBeDefined();
    expect(service.findById).toBeDefined();
  });

  it('should create user', async () => {
    expect.assertions(1);
    const user = await service.create();
    expect(user).toEqual(userDtoMock);
  });

  // it('should find all users', async () => {
  //   expect.assertions(1);
  //   const users = await service.findAll();
  //   expect(users).toEqual(userDtoMock);
  // });
});
