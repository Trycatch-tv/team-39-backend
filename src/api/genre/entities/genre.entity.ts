import {
  Collection,
  Entity,
  ManyToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Movie } from '../../../api/movie/entities/movie.entity';

@Entity({ tableName: 'genre' })
export class Genre {
  @PrimaryKey({ autoincrement: true })
  id: number;

  @Property()
  name: string;

  @ManyToMany(() => Movie, (movies) => movies.genres)
  movies = new Collection<Movie>(this);
}
