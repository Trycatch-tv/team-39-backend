import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { MailService } from '../mail/service/mail.service';
import { UserModel } from '../user/infrastructure/model/user.model';
import { MysqlRepositoryService } from '../user/infrastructure/repository/mysql.repository.service';
import { AuthController } from './infrastructure/controller/auth.controller';
import { AuthRepositoryService } from './infrastructure/repository/auth.repository.service';
import { JwtStrategy } from './infrastructure/strategy/jwt.strategy';
import { LocalStrategy } from './infrastructure/strategy/local.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      useFactory(configService: ConfigService) {
        return {
          secret: configService.get('JWT_SECRET') || 'secret',
          signOptions: { expiresIn: '3600s' },
        };
      },
      inject: [ConfigService],
    }),
    MikroOrmModule.forFeature([UserModel]),
  ],
  controllers: [AuthController],
  providers: [
    AuthRepositoryService,
    LocalStrategy,
    JwtStrategy,
    MysqlRepositoryService,
    MailService,
  ],
})
export class AuthModule {}
