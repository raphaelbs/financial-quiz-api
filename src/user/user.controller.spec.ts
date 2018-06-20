import 'jest';
import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { ObjectId } from 'bson';
import { IUser } from './user.interface';
import { IUserDto } from './user.dto';

describe('User Controller', () => {
  let module: TestingModule;
  let controller: UserController;

  const iUser = { id: new ObjectId().toHexString() } as IUser;
  const iUsers = [iUser];
  const userDtoMock = { id: iUser.id } as IUserDto;

  class UserService {
    create(): Promise<IUser> {
      return Promise.resolve(iUser);
    }
    findById(id: string): Promise<IUser> {
      return Promise.resolve(iUsers.filter(u => u.id === id)[0]);
    }
    findAll(): Promise<IUser[]> {
      return Promise.resolve(iUsers);
    }
    acceptEula(userDto: IUserDto): Promise<boolean> {
      return Promise.resolve(userDto.eula_accepted);
    }
  }

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();
    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(controller.findAllUsers).toBeDefined();
    expect(controller.findById).toBeDefined();
    expect(controller.createUser).toBeDefined();
    expect(controller.acceptEula).toBeDefined();
  });

  it('should find all users', async () => {
    expect.assertions(1);
    const users = await controller.findAllUsers();
    expect(users).toEqual(iUsers);
  });

  it('should find user by id', async () => {
    expect.assertions(2);
    let user;

    user = await controller.findById(iUser.id);
    expect(user).toEqual(iUser);

    user = await controller.findById(new Object().toString());
    expect(user).toEqual(iUser);
  });
});
