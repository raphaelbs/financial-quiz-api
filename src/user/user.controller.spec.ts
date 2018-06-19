import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import 'jest';
import { ObjectId } from 'bson';
import { IUser } from './user.interface';

describe('User Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService, {
        provide: 'UserModel',
        useValue: {
            _id: new ObjectId(),
        } as IUser,
      }],
    }).compile();
  });

  it('should be defined', () => {
    const controller: UserController = module.get<UserController>(UserController);
    expect(controller).toBeDefined();
  });
});
