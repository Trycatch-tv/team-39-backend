import { UserEntity } from '../domain/user.entity';
import { UserRepository } from '../domain/user.repository';
import UserValue from '../domain/user.value';
import { IUserUseCase } from '../domain/user.use-case';

export class UserUseCase implements IUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  createUser = (user: UserEntity) => {
    const userCreated = this.userRepository.create(new UserValue(user));
    return userCreated;
  };

  findUsers = () => {
    const users = this.userRepository.findAll();
    return users;
  };

  findUser = (id: string) => {
    const user = this.userRepository.findById(id);
    return user;
  };

  updateUser(id: string, user: UserEntity) {
    return this.userRepository.update(id, user);
  }
}
