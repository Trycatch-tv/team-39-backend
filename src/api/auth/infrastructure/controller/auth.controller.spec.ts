import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { MysqlRepositoryService } from '../../../../../src/api/user/infrastructure/repository/mysql.repository.service';
import { MockRepository } from '../../../../../src/api/user/infrastructure/repository/user-mock.repository';
import { AuthRepositoryService } from '../repository/auth.repository.service';
import { AuthController } from './auth.controller';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        { provide: MysqlRepositoryService, useClass: MockRepository },
        AuthRepositoryService,
        JwtService,
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
