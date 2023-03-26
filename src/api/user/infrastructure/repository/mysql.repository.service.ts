import { Injectable } from '@nestjs/common';
import { UserEntity } from '../../domain/user.entity';
import { UserRepository } from '../../domain/user.repository';
import UserModel from '../model/user.model';

@Injectable()
export class MysqlRepositoryService implements UserRepository {
  findOne(email: string): Promise<UserEntity> {
    return UserModel.findOne(email);
  }
  create(user: UserEntity): Promise<UserEntity> {
    return UserModel.create(user);
  }
  findAll(): Promise<UserEntity[] | any> {
    return UserModel.findAll();
  }
  findById(id: string): Promise<UserEntity> {
    return UserModel.findById(id);
  }
  update(id: string, user: UserEntity): Promise<UserEntity> {
    return UserModel.update(id, user);
  }
}
