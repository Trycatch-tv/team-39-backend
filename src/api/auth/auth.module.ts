import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
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
          secret: configService.get('JWT_SECRET'),
          signOptions: { expiresIn: '60s' },
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthRepositoryService,
    MysqlRepositoryService,
    LocalStrategy,
    JwtStrategy,
  ],
})
export class AuthModule {}
