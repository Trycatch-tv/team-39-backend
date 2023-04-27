import { MikroOrmModuleAsyncOptions } from '@mikro-orm/nestjs';
import { ConfigService } from '@nestjs/config';
import { Director } from './src/api/director/entities/director.entity';
import { Genre } from './src/api/genre/entities/genre.entity';
import { Movie } from './src/api/movie/entities/movie.entity';
import { Review } from './src/api/review/entities/review.entity';
import { UserModel } from './src/api/user/infrastructure/model/user.model';

// const configService = new ConfigService();
export default async function (
  configService: ConfigService,
): Promise<MikroOrmModuleAsyncOptions | any> {
  return {
    dbName: 'movie_app',
    type: 'mysql',
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'admin',
    entities: [UserModel, Director, Genre, Movie, Review],
    autoLoadEntities: true,
    schemaGenerator: {
      disableForeignKeys: true, // wrap statements with `set foreign_key_checks = 0` or equivalent
      createForeignKeyConstraints: true, // whether to generate FK constraints
      ignoreSchema: [], // allows ignoring some schemas when diffing
    },
  };
}
