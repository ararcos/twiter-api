import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  async getAllUsers(): Promise<UserDto[]> {
    return await this.userService.getAllUsers();
  }

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<UserDto> {
    return this.userService.getUser(id);
  }

  @Post()
  async createUser(@Body() user: UserDto): Promise<UserDto> {
    return await this.userService.newUser(user);
  }

  @Patch(':id')
  // eslint-disable-next-line prettier/prettier
  async updateUser(@Param('id') id: string, @Body() data: UserDto): Promise<UserDto> {
    return await this.userService.updateUser(id, data);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<void> {
    return await this.userService.deleteUser(id);
  }
}
