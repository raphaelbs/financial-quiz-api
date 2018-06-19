import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { IUserDto } from './user.dto';
import { IUser } from './user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/all')
  async findAllUsers(): Promise<IUser[]> {
    return this.userService.findAll();
  }

  @Get('/id/:id')
  async findById(@Param('id') id): Promise<IUser> {
    return this.userService.findById(id);
  }

  @Post()
  async createUser(@Body() userDto: IUserDto): Promise<IUser> {
    return this.userService.create(userDto);
  }
}
