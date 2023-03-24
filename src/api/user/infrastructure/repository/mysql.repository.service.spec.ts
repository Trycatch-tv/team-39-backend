import { Test, TestingModule } from '@nestjs/testing';
import { MysqlRepositoryService } from './mysql.repository.service';

describe('MysqlRepositoryService', () => {
  let service: MysqlRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MysqlRepositoryService],
    }).compile();

    service = module.get<MysqlRepositoryService>(MysqlRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
