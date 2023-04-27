import { Module } from '@nestjs/common';
import { GenreService } from './genre.service';
import { GenreController } from './genre.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Genre } from './entities/genre.entity';

@Module({
  controllers: [GenreController],
  providers: [GenreService],
  imports: [MikroOrmModule.forFeature([Genre])],
})
export class GenreModule {}
