import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { UserController } from './infrastructure/controller/user.controller';
import { UserModel } from './infrastructure/model/user.model';
import { MysqlRepositoryService } from './infrastructure/repository/mysql.repository.service';

@Module({
  imports: [MikroOrmModule.forFeature([UserModel])],
  controllers: [UserController],
  providers: [MysqlRepositoryService],
  exports: [MysqlRepositoryService],
})
export class UserModule {}
