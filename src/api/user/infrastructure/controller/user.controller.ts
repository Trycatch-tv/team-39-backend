import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FormatResponseInterceptor } from '../../../../../src/interceptors/format-response.interceptor';
import { MysqlRepositoryService } from '../repository/mysql.repository.service';
import { UserUseCase } from '../../application/user.use-case';
import UserDto from '../../application/user.dto';
import { IUserUseCase } from '../../domain/user.use-case';
import { Auth } from 'src/decorators/auth.decorator';
import { Role } from 'src/enums/role.enum';
import { LocalAuthGuard } from 'src/guards/auth.guard';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@UseInterceptors(FormatResponseInterceptor)
@Controller('api/v1/user')
export class UserController {
  useCase: IUserUseCase;
  constructor(private readonly mysqlRepository: MysqlRepositoryService) {
    this.useCase = new UserUseCase(this.mysqlRepository);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  getUsers() {
    return this.useCase.findUsers();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.useCase.findUser(id);
  }

  // @Post()
  // createUser(@Body() user: UserDto) {
  //   return this.useCase.createUser(user);
  // }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() user: UserDto) {
    return this.useCase.updateUser(id, user);
  }
}
