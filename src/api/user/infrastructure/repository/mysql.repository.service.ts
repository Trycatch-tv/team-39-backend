import { EntityManager, EntityRepository } from '@mikro-orm/mysql';
import { InjectRepository } from '@mikro-orm/nestjs';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UserEntity } from '../../domain/user.entity';
import { UserRepository } from '../../domain/user.repository';
import { UserModel } from '../model/user.model';

@Injectable()
export class MysqlRepositoryService implements UserRepository {
  constructor(
    @InjectRepository(UserModel)
    private userModel: EntityRepository<UserModel>,
    private em: EntityManager,
  ) {}
  findOne(email: string): Promise<UserEntity> {
    return this.userModel.findOne({ email });
  }
  async create(user: UserEntity): Promise<UserEntity> {
    const userCreated = new UserModel(user);
    this.userModel.persistAndFlush(userCreated);
    return userCreated;
  }
  findAll(): Promise<UserEntity[] | any> {
    return this.userModel.findAll();
  }
  findById(id: string): Promise<UserEntity> {
    return this.userModel.findOne({ uuid: id });
  }
  async update(id: string, user: UserEntity): Promise<UserEntity> {
    const existUser = await this.userModel.findOne({ uuid: id });
    if (!existUser) throw new BadRequestException('user not found');
    const isEmailAvailable = await this.em.findOne(UserModel, {
      $and: [{ email: { $eq: user.email } }, { uuid: { $nin: [id] } }],
    });
    if (isEmailAvailable) throw new BadRequestException('email is taken');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, uuid, ...res } = user;
    this.userModel.nativeUpdate({ uuid: id }, res);
    return user;
  }
}
