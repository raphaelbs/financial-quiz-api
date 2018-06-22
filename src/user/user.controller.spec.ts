import 'jest';
import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { IUserDto } from './user.dto';
import { UserMockService, UserMock } from './user.mock';
import { UserService } from './user.service';

describe('User Controller', () => {
  let module: TestingModule;
  let controller: UserController;
  let userMock: UserMock;

  beforeAll(async () => {
    userMock = new UserMock();

    module = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        { provide: UserService, useValue: new UserMockService(userMock) },
      ],
    }).compile();
    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(controller.findAll).toBeDefined();
    expect(controller.findById).toBeDefined();
    expect(controller.create).toBeDefined();
    expect(controller.acceptEula).toBeDefined();
  });

  it('should find all users', async () => {
    expect.assertions(1);
    const users = await controller.findAll();
    expect(users).toEqual(userMock.iUsers);
  });

  it('should find user by id', async () => {
    expect.assertions(2);

    const user = userMock.iUsers[0];
    expect(await controller.findById(user.id)).toEqual(user);

    expect(await controller.findById(new Object().toString())).toEqual(
      undefined,
    );
  });

  it('should accept eula', async () => {
    expect.assertions(2);

    const eulaNotAccepted = userMock.iUsers[1];
    expect(
      await controller.acceptEula(eulaNotAccepted as IUserDto),
    ).toBeFalsy();

    const eulaAccepted = userMock.iUsers[2];
    expect(await controller.acceptEula(eulaAccepted as IUserDto)).toBeTruthy();
  });
});
