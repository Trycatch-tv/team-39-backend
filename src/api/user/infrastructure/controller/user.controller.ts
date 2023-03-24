import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { FormatResponseInterceptor } from '../../../../../src/interceptors/format-response.interceptor';
import { MysqlRepositoryService } from '../repository/mysql.repository.service';
import LoginDto from '../../application/login.dto';

@UseInterceptors(FormatResponseInterceptor)
@Controller('api/v1/user')
export class UserController {
  constructor(private readonly mysqlRepository: MysqlRepositoryService) {}

  @Get('/')
  getUsers() {
    return this.mysqlRepository.findAll();
  }
  @Get('/:id')
  getUser(@Param('id') id: string) {
    return this.mysqlRepository.findById(id);
  }

  @Post('/auth/login')
  login(@Body() user: LoginDto) {
    return user;
  }
}
