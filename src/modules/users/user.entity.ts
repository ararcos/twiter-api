import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  readonly userId: string;

  @Column({
    unique: true,
  })
  readonly name: string;

  constructor(userId: string, name: string) {
    super();
    this.userId = userId;
    this.name = name;
  }
}
