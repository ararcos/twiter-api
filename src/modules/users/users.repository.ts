import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { UserEntity } from './user.entity';
import { UserMapper } from './user.mapper';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private mapper: UserMapper,
  ) {}
  getAllUsers(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }
  getUser(id: string): Promise<UserEntity> {
    return this.userRepository.findOne(id);
  }
  newUser(userDto: UserDto): Promise<UserEntity> {
    const newUser = this.mapper.dtoToEntity(userDto);
    return this.userRepository.save(newUser);
  }
  updateUser(id: string, userDto: UserDto): Promise<UserEntity> {
    userDto.id = id;
    const updateUser = this.mapper.dtoToEntity(userDto);
    this.userRepository.update(id, updateUser);
    return this.userRepository.findOne(id);
  }
  deleteUser(id: string): Promise<DeleteResult> {
    return this.userRepository.delete(id);
  }
}
