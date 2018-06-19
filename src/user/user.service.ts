import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUserDto } from './user.dto';
import { ObjectId } from 'bson';
import { IUser } from './user.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

  async create(userDTO: IUserDto): Promise<IUser> {
    const createdUser = new this.userModel(userDTO);
    return await createdUser.save();
  }

  async findAll(): Promise<IUser[]> {
    return await this.userModel.find().exec();
  }

  async findById(id: string): Promise<IUser> {
    return await this.userModel.findOne({ _id: new ObjectId(id) });
  }
}
