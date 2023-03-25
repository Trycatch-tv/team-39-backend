import { UserEntity } from './user.entity';

export interface IUserUseCase {
  findUser(id: string): Promise<UserEntity | null>;
  findUsers(): Promise<UserEntity[] | null>;
  createUser(user: UserEntity): Promise<UserEntity | null>;
  updateUser(id: string, user: UserEntity): Promise<UserEntity | null>;
}
