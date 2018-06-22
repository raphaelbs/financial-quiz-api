import { IUser } from './user.interface';
import { ObjectId } from 'bson';
import { IUserDto } from './user.dto';
import { IBaseService } from 'base/base.service.interface';

export class UserMock {
  readonly iUsers: IUser[];
  readonly userDtoMock: IUserDto;
  constructor() {
    this.iUsers = [
      { id: new ObjectId().toHexString() } as IUser,
      { id: new ObjectId().toHexString(), eula_accepted: false } as IUser,
      { id: new ObjectId().toHexString(), eula_accepted: true } as IUser,
    ];
    this.userDtoMock = { id: this.iUsers[0].id } as IUserDto;
  }
}

export class UserMockService implements IBaseService<IUser, IUserDto> {
  constructor(private userMock: UserMock) {
    this.userMock = userMock;
  }

  create(): Promise<IUser> {
    return Promise.resolve(this.userMock.iUsers[0]);
  }
  findById(id: string): Promise<IUser> {
    return Promise.resolve(this.userMock.iUsers.filter(u => u.id === id)[0]);
  }
  findAll(): Promise<IUser[]> {
    return Promise.resolve(this.userMock.iUsers);
  }
  acceptEula(userDto: IUserDto): Promise<boolean> {
    return Promise.resolve(userDto.eula_accepted);
  }
}
