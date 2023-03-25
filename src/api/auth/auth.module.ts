import { Module } from '@nestjs/common';
import { MysqlRepositoryService } from '../user/infrastructure/repository/mysql.repository.service';
import { AuthController } from './infrastructure/controller/auth.controller';
import { AuthRepositoryService } from './infrastructure/repository/auth.repository.service';

@Module({
  controllers: [AuthController],
  providers: [AuthRepositoryService, MysqlRepositoryService],
})
export class AuthModule {}
