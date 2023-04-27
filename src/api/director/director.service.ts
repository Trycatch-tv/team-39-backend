import { EntityManager, EntityRepository } from '@mikro-orm/mysql';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { CreateDirectorDto } from './dto/create-director.dto';
import { UpdateDirectorDto } from './dto/update-director.dto';
import { Director } from './entities/director.entity';

@Injectable()
export class DirectorService {
  constructor(
    @InjectRepository(Director)
    private _directorModel: EntityRepository<Director>,
    private _em: EntityManager,
  ) {}
  async create(createDirectorDto: CreateDirectorDto) {
    try {
      const director = this._em.create(Director, createDirectorDto);
      return await this._directorModel.persistAndFlush(director);
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    try {
      return await this._directorModel.findAll();
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: number) {
    try {
      return await this._directorModel.findOne({ id });
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: number, updateDirectorDto: UpdateDirectorDto) {
    try {
      return await this._directorModel.nativeUpdate({ id }, updateDirectorDto);
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: number) {
    try {
      return await this._directorModel.nativeDelete({ id });
    } catch (error) {
      console.log(error);
    }
  }
}
