import { Injectable } from '@nestjs/common';
import { UserEntity } from '../../domain/user.entity';
import { UserRepository } from '../../domain/user.repository';
import UserMockModel from '../model/user-mock.model';

@Injectable()
export class MockRepository implements UserRepository {
  findById(id: string): Promise<UserEntity | null> {
    return UserMockModel.findById(id);
  }

  findOne(): Promise<UserEntity | null> {
    return UserMockModel.findOne();
  }

  findAll(): Promise<UserEntity[] | null> {
    return UserMockModel.findAll();
  }

  create(user: UserEntity): Promise<UserEntity> {
    return UserMockModel.create(user);
  }
}
