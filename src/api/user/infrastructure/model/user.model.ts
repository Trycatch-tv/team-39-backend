import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { Role } from '../../../../../src/shared/enums/role.enum';
import { UserEntity } from '../../domain/user.entity';

@Entity({ tableName: 'user' })
export class UserModel {
  @PrimaryKey({ autoincrement: true })
  id: number;

  @Property()
  uuid: string;

  @Property()
  first_name: string;

  @Property()
  last_name: string;

  @Property({ unique: true })
  email: string;

  @Property()
  roles: Role[];

  @Property({ hidden: true })
  password: string;

  constructor(user: UserEntity) {
    this.email = user.email;
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.uuid = user.uuid;
    this.password = user.password;
    this.roles = user.roles;
  }
}
