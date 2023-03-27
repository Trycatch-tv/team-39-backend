import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import UserDto from '../../../user/application/user.dto';
import { FormatResponseInterceptor } from '../../../../shared/interceptors/format-response.interceptor';
import { AuthUseCase } from '../../application/auth.use-case';
import { IAuthUseCase } from '../../domain/auth.use-case';
import { AuthRepositoryService } from '../repository/auth.repository.service';
import { LocalAuthGuard } from '../../../../../src/shared/guards/auth.guard';

@UseInterceptors(FormatResponseInterceptor)
@Controller('api/v1/auth')
export class AuthController {
  authUseCase: IAuthUseCase;
  constructor(private readonly authRepository: AuthRepositoryService) {
    this.authUseCase = new AuthUseCase(authRepository);
  }
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Request() req) {
    return this.authUseCase.loginWithEmail(req.user);
  }
  @Post('register')
  register(@Body() user: UserDto) {
    return this.authUseCase.registerWithEmail(user);
  }
}
