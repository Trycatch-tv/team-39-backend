import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Movie } from './entities/movie.entity';

@Module({
  controllers: [MovieController],
  providers: [MovieService],
  imports: [MikroOrmModule.forFeature([Movie])],
})
export class MovieModule {}
