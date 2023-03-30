import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { FormatResponseInterceptor } from '../../../../shared/interceptors/format-response.interceptor';
import { MysqlRepositoryService } from '../repository/mysql.repository.service';
import { UserUseCase } from '../../application/user.use-case';
import UserDto from '../../application/user.dto';
import { IUserUseCase } from '../../domain/user.use-case';

@UseInterceptors(FormatResponseInterceptor)
@Controller('api/v1/user')
export class UserController {
  useCase: IUserUseCase;
  constructor(private readonly mysqlRepository: MysqlRepositoryService) {
    this.useCase = new UserUseCase(this.mysqlRepository);
  }

  @Get()
  // @Auth(Role.User)
  getUsers() {
    return this.useCase.findUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.useCase.findUser(id);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() user: UserDto) {
    return this.useCase.updateUser(id, user);
  }
}
