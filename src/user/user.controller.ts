import { Controller, Put, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { IUserDto } from './user.dto';
import { IUser } from './user.interface';
import { BaseController } from '../base/base.controller';

@Controller('user')
export class UserController extends BaseController<IUser, IUserDto> {
  constructor(private readonly userService: UserService) {
    super(userService);
  }

  @Put()
  async acceptEula(@Body() userDto: IUserDto): Promise<boolean> {
    return this.userService.acceptEula(userDto);
  }
}
