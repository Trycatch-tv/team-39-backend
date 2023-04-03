import { Test, TestingModule } from '@nestjs/testing';
import { MysqlRepositoryService } from '../repository/mysql.repository.service';
import { MockRepository } from '../repository/user-mock.repository';
import { UserController } from './user.controller';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        { provide: MysqlRepositoryService, useClass: MockRepository },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
