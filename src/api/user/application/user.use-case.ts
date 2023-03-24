import { UserEntity } from '../domain/user.entity';
import { UserRepository } from '../domain/user.repository';
import UserValue from '../domain/user.value';

export class UserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  register = (user: UserEntity) => {
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
}
