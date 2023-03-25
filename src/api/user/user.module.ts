import { Module } from '@nestjs/common';
import { UserController } from './infrastructure/controller/user.controller';
import { MysqlRepositoryService } from './infrastructure/repository/mysql.repository.service';

@Module({
  controllers: [UserController],
  providers: [MysqlRepositoryService],
  exports: [MysqlRepositoryService],
})
export class UserModule {}
