import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class UserModel {
  @PrimaryKey()
  id: number;

  @Property()
  uuid: string;

  @Property()
  name: string;

  @Property()
  email: string;

  @Property()
  password: string;
}
