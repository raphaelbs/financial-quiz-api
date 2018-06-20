import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUserDto } from './user.dto';
import { ObjectId } from 'bson';
import { IUser } from './user.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

  async findAll(): Promise<IUser[]> {
    return await this.userModel.find().exec();
  }

  async findById(id: string): Promise<IUser> {
    return await this.userModel.findOne({ _id: new ObjectId(id) });
  }

  async create(): Promise<IUser> {
    const createdUser = new this.userModel();
    return await createdUser.save();
  }

  async eulaAccept(userDto: IUserDto): Promise<boolean> {
    try {
      await this.userModel
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
