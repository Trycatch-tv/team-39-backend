import { nanoid } from 'nanoid';
import { UserEntity } from './user.entity';

export default class UserValue implements UserEntity {
  uuid: string;

  name: string;

  email: string;

  constructor(user: UserEntity) {
    this.uuid = nanoid();
    this.name = user.name;
    this.email = user.email;
  }
}
