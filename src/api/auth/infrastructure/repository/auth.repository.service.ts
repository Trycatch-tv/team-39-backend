import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../../../user/domain/user.entity';
import { MysqlRepositoryService } from './../../../../../src/api/user/infrastructure/repository/mysql.repository.service';
import { Role } from '../../../../../src/shared/enums/role.enum';
import { MailService } from '../../../mail/service/mail.service';
import { MailDto } from '../../../mail/dto/mail.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthRepositoryService {
  constructor(
    private readonly userRepository: MysqlRepositoryService,
    private readonly _mailService: MailService,
    private jwtService: JwtService,
    private readonly _configService: ConfigService,
  ) {}
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userRepository.findOne(email);
    if (user && (await this.comparePassword(password, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    throw new BadRequestException('user or password incorrect');
  }
  async registerUser(user: UserEntity) {
    try {
      const existUser = await this.userRepository.findOne(user.email);
      if (existUser) throw new BadRequestException('user already exist');
      if (!Object.values(Role).some((role) => user?.roles?.includes(role)))
        throw new BadRequestException('role not exist');
      const createdUser = await this.userRepository.create(user);
      const payload = { ...createdUser };
      // const mailData: MailDto = {
      //   to: createdUser.email,
      //   from: 'noreply@crisego.com',
      //   subject: `Welcome ${createdUser.first_name} ${createdUser.last_name}`,
      //   template: 'welcome',
      //   data: {
      //     first_name: createdUser.first_name,
      //     last_name: createdUser.last_name,
      //   },
      // };
      // this._mailService.send(mailData);
      // const confirmToken = this.jwtService.sign(payload, {
      //   expiresIn: '24h',
      // });
      // const confirmEmailData = {
      //   ...mailData,
      //   subject: 'Confirm your account',
      //   template: 'confirm-account',
      //   data: {
      //     url: `${this._configService.get(
      //       'server.url',
      //     )}/api/v1/auth/confirm-account?token=${confirmToken}`,
      //   },
      // };
      // this._mailService.send(confirmEmailData);
      return {
        access_token: this.jwtService.sign(payload),
      };
    } catch (error) {
      throw new InternalServerErrorException('Error performing operation');
    }
  }
  async login(user: UserEntity): Promise<{ access_token: string }> {
    const payload = { ...user };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
  async comparePassword(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
  }

  async decodeToken(token: string) {
    try {
      const isValid = this.jwtService.verify(
        token,
        this._configService.get('JWT_SECRET'),
      );
      await this.userRepository.setConfirmed(isValid.uuid, true);
      return 'Your account was confirmed';
    } catch (error) {
      console.error(error);
      throw new BadRequestException('token has expired');
    }
  }
}
