import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { MysqlRepositoryService } from '../../../../../src/api/user/infrastructure/repository/mysql.repository.service';
import { MockRepository } from '../../../../../src/api/user/infrastructure/repository/user-mock.repository';
import { AuthRepositoryService } from './auth.repository.service';

describe('AuthRepositoryService', () => {
  let service: AuthRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        { provide: MysqlRepositoryService, useClass: MockRepository },
        { provide: AuthRepositoryService, useClass: AuthRepositoryService },
        JwtService,
      ],
    }).compile();

    service = module.get<AuthRepositoryService>(AuthRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
