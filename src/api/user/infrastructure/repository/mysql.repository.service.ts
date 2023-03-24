import { Injectable } from '@nestjs/common';
import { UserEntity } from '../../domain/user.entity';
import { UserRepository } from '../../domain/user.repository';
import UserMockModel from '../model/user.model';

@Injectable()
export class MysqlRepositoryService implements UserRepository {
  findOne(): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
  create(user: UserEntity): Promise<UserEntity> {
    throw new Error('Method not implemented.' + user);
  }
  findAll(): Promise<UserEntity[] | any> {
    return UserMockModel.findAll();
  }
  findById(id: string): Promise<UserEntity> {
    return UserMockModel.findById(id);
  }
}
