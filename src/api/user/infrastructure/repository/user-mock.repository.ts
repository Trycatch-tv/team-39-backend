import { Injectable } from '@nestjs/common';
import { UserEntity } from '../../domain/user.entity';
import { UserRepository } from '../../domain/user.repository';
import UserMockModel from '../model/user-mock.model';

@Injectable()
export class MockRepository implements UserRepository {
  findOne(email: string): Promise<UserEntity> {
    return UserMockModel.findOne(email);
  }
  create(user: UserEntity): Promise<UserEntity> {
    return UserMockModel.create(user);
  }
  findAll(): Promise<UserEntity[] | any> {
    return UserMockModel.findAll();
  }
  findById(id: string): Promise<UserEntity> {
    return UserMockModel.findById(id);
  }
  update(id: string, user: UserEntity): Promise<UserEntity> {
    return UserMockModel.update(id, user);
  }
}
