import {
  Collection,
  Entity,
  ManyToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Genre } from '../../genre/entities/genre.entity';

@Entity({ tableName: 'movie' })
export class Movie {
  @PrimaryKey({ autoincrement: true })
  id: number;

  @Property()
  name: string;

  @Property()
  image: string;

  @Property()
  synopsis: string;

  @Property()
  year: number;

  @Property()
  active: boolean;

  @Property({ type: 'timestamp', onCreate: () => new Date() })
  createdAt: Date;

  @ManyToMany(() => Genre, (genres) => genres.movies, {
    owner: true,
    hidden: true,
  })
  genres = new Collection<Genre>(this);
}
