import { UserEntity } from './user.entity';

export interface UserRepository {
  findById(id: string): Promise<UserEntity | null>;
  findOne(): Promise<UserEntity | null>;
  create(user: UserEntity): Promise<UserEntity | null>;
  findAll(): Promise<UserEntity[] | null>;
}
