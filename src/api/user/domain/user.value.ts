import { nanoid } from 'nanoid';
import * as bcrypt from 'bcrypt';
import { UserEntity } from './user.entity';
import { Role } from 'src/shared/enums/role.enum';

export default class UserValue implements UserEntity {
  uuid: string;

  name: string;

  email: string;

  password: string;

  roles: Role[];

  constructor(user: UserEntity) {
    this.uuid = nanoid();
    this.name = user.name;
    this.email = user.email;
    this.password = this.hashPassword(user.password);
    this.roles = !user.roles ? [Role.User] : user.roles;
  }
  hashPassword(password) {
    const saltOrRounds = 10;
    const hashedPassword = bcrypt.hashSync(password, saltOrRounds);
    return hashedPassword;
  }
}
