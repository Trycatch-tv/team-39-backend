import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../../../../../src/api/user/domain/user.entity';
import { MysqlRepositoryService } from './../../../../../src/api/user/infrastructure/repository/mysql.repository.service';
import { LoginEntity } from '../../domain/login.entity';

@Injectable()
export class AuthRepositoryService {
  constructor(
    private readonly userRepository: MysqlRepositoryService,
    private jwtService: JwtService,
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
    const existUser = await this.userRepository.findOne(user.email);
    if (existUser) throw new BadRequestException('user already exist');
    return this.userRepository.create(user);
  }
  async login(user: UserEntity): Promise<{ access_token: string }> {
    const payload = { email: user.email, sub: user.uuid };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
  async comparePassword(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
  }
}
