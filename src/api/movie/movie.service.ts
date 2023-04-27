import { EntityRepository } from '@mikro-orm/mysql';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private _movieModel: EntityRepository<Movie>,
  ) {}
  async create(createMovieDto: CreateMovieDto) {
    try {
      return await this._movieModel.persistAndFlush(createMovieDto);
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    try {
      return await this._movieModel.findAll();
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: number) {
    try {
      return await this._movieModel.findOne({ id });
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: number, updateMovieDto: UpdateMovieDto) {
    try {
      return await this._movieModel.nativeUpdate({ id }, updateMovieDto);
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: number) {
    try {
      return await this._movieModel.nativeDelete({ id });
    } catch (error) {
      console.log(error);
    }
  }
}
