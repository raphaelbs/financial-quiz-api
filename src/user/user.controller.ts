import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from './user.service';
import { IUserDto } from './user.dto';
import { IUser } from './user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Teste
  @Get('/all')
  async findAllUsers(): Promise<IUser[]> {
    return this.userService.findAll();
  }

  @Get('/id/:id')
  async findById(@Param('id') id): Promise<IUser> {
    try {
      return this.userService.findById(id);
    } catch {
      throw new HttpException(
        { status: HttpStatus.NOT_FOUND, error: 'Usuário não encontrado' },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Post()
  async createUser(): Promise<IUser> {
    return this.userService.create();
  }

  @Put()
  async acceptEula(@Body() userDto: IUserDto): Promise<boolean> {
    return this.userService.eulaAccept(userDto);
  }
}
