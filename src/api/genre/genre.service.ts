import { EntityManager, EntityRepository } from '@mikro-orm/mysql';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Genre } from './entities/genre.entity';

@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(Genre)
    private _genreModel: EntityRepository<Genre>,
    private _em: EntityManager,
  ) {}
  async create(createGenreDto: CreateGenreDto) {
    try {
      const genre = this._em.create(Genre, createGenreDto);
      return await this._genreModel.persistAndFlush(genre);
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    try {
      return await this._genreModel.findAll();
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: number) {
    try {
      return await this._genreModel.findOne({ id });
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: number, updateGenreDto: UpdateGenreDto) {
    try {
      return await this._genreModel.nativeUpdate({ id }, updateGenreDto);
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: number) {
    try {
      return await this._genreModel.nativeDelete({ id });
    } catch (error) {
      console.log(error);
    }
  }
}
