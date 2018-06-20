import { IBaseService } from './base.service.interface';
import { Model, Document } from 'mongoose';
import { ObjectId } from 'bson';

export abstract class BaseService<T extends Document, K>
  implements IBaseService<T, K> {
  constructor(protected readonly model: Model<T>) {}
  async findAll(): Promise<T[]> {
    return await this.model.find().exec();
  }
  async findById(id: string): Promise<T> {
    return await this.model.findOne({ _id: new ObjectId(id) });
  }
  async create(dto: K): Promise<T> {
    const createdUser = new this.model(dto);
    return await createdUser.save();
  }
}
