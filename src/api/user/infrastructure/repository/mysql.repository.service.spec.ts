import { Test, TestingModule } from '@nestjs/testing';
import { MysqlRepositoryService } from './mysql.repository.service';
import { MockRepository } from './user-mock.repository';

describe('MysqlRepositoryService', () => {
  let service: MysqlRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        { provide: MysqlRepositoryService, useClass: MockRepository },
      ],
    }).compile();

    service = module.get<MysqlRepositoryService>(MysqlRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
