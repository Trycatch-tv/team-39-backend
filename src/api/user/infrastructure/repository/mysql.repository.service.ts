import { EntityRepository } from '@mikro-orm/mysql';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { UserEntity } from '../../domain/user.entity';
import { UserRepository } from '../../domain/user.repository';
import { UserModel } from '../model/user.model';

@Injectable()
export class MysqlRepositoryService implements UserRepository {
  constructor(
    @InjectRepository(UserModel)
    private userModel: EntityRepository<UserModel>,
  ) {}
  findOne(email: string): Promise<UserEntity> {
    return this.userModel.findOne({ email });
  }
  async create(user: UserEntity): Promise<UserEntity> {
    const userCreated = this.userModel.create(user);
    await this.userModel.persistAndFlush(user);
    return userCreated;
  }
  findAll(): Promise<UserEntity[] | any> {
    return this.userModel.findAll();
  }
  findById(id: string): Promise<UserEntity> {
    return this.userModel.findOne({ uuid: id });
  }
  async update(id: string, user: UserEntity): Promise<UserEntity> {
    this.userModel.persist(user);
    await this.userModel.flush();
    return user;
  }
}
