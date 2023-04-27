import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'director' })
export class Director {
  @PrimaryKey({ autoincrement: true })
  id: number;

  @Property()
  name: string;

  @Property({ default: true })
  active: boolean;
}
