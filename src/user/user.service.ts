import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUserDto } from './user.dto';
import { ObjectId } from 'bson';
import { IUser } from './user.interface';
import { BaseService } from '../base/base.service';

@Injectable()
export class UserService extends BaseService<IUser, IUserDto> {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {
    super(userModel);
  }

  async acceptEula(userDto: IUserDto): Promise<boolean> {
    try {
      await this.model
        .updateOne({ _id: new ObjectId(userDto.id) }, {
          eula_accepted: userDto.eula_accepted,
        } as IUser)
        .exec();
      return true;
    } catch (err) {
      return false;
    }
  }
}
