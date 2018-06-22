import { Document } from 'mongoose';
import {
  Body,
  Post,
  HttpStatus,
  HttpException,
  Get,
  Param,
} from '@nestjs/common';
import { BaseService } from './base.service';

export class BaseController<T extends Document, K> {
  constructor(private readonly service: BaseService<T, K>) {}

  @Get('/all')
  async findAll(): Promise<T[]> {
    return this.service.findAll();
  }

  @Get('/id/:id')
  async findById(@Param('id') id): Promise<T> {
    try {
      return this.service.findById(id);
    } catch {
      throw new HttpException(
        { status: HttpStatus.NOT_FOUND, error: 'Não encontrado' },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Post()
  async create(@Body() dto?: K): Promise<T> {
    return this.service.create(dto);
  }
}
