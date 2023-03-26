import { nanoid } from 'nanoid';
import * as bcrypt from 'bcrypt';
import { UserEntity } from './user.entity';

export default class UserValue implements UserEntity {
  uuid: string;

  name: string;

  email: string;

  password: string;

  constructor(user: UserEntity) {
    this.uuid = nanoid();
    this.name = user.name;
    this.email = user.email;
    this.password = this.hashPassword(user.password);
  }
  hashPassword(password) {
    const saltOrRounds = 10;
    const hashedPassword = bcrypt.hashSync(password, saltOrRounds);
    return hashedPassword;
  }
}
