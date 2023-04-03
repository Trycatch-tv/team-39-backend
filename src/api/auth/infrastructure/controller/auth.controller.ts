import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
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
import { MailService } from '../../../mail/service/mail.service';

@UseInterceptors(FormatResponseInterceptor)
@Controller('api/v1/auth')
export class AuthController {
  authUseCase: IAuthUseCase;
  constructor(
    private readonly authRepository: AuthRepositoryService,
    private readonly _mailService: MailService,
  ) {
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

  @Get('confirm-account')
  confirmAccount(@Query() token: { token: string }) {
    return this.authUseCase.confirmToken(token.token);
  }
}
