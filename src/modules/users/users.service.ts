import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { UserMapper } from './user.mapper';
import { UserEntity } from './user.entity';
import { UserDto } from './dto/user.dto';
import { DeleteResult } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    private usersRepository: UsersRepository,
    private mapper: UserMapper,
  ) {}

  async getAllUsers(): Promise<UserDto[]> {
    const users: UserEntity[] = await this.usersRepository.getAllUsers();
    return users.map((value) => this.mapper.entityToDto(value));
  }

  async getUser(id: string): Promise<UserDto> {
    const user = await this.usersRepository.getUser(id);
    return this.mapper.entityToDto(user);
  }

  async newUser(userDto: UserDto): Promise<UserDto> {
    const user = await this.usersRepository.newUser(userDto);
    return this.mapper.entityToDto(user);
  }

  async updateUser(id: string, userDto: UserDto): Promise<UserDto> {
    await this.usersRepository.updateUser(id, userDto);
    const newUser = await this.usersRepository.getUser(id);
    return this.mapper.entityToDto(newUser);
  }

  async deleteUser(id: string): Promise<void> {
    await this.usersRepository.deleteUser(id);
  }
}
