import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Movie } from '../../movie/entities/movie.entity';
import { UserModel } from '../../user/infrastructure/model/user.model';

@Entity({ tableName: 'review' })
export class Review {
  @PrimaryKey({ autoincrement: true })
  id: number;

  @Property()
  comment: string;

  @ManyToOne(() => Movie)
  movie!: Movie;

  @ManyToOne(() => UserModel)
  user!: UserModel;

  @Property({ onCreate: () => new Date() })
  createdAt: Date;
}
