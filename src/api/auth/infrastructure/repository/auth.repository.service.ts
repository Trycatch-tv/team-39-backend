import { Injectable } from '@nestjs/common';
import { MysqlRepositoryService } from './../../../../../src/api/user/infrastructure/repository/mysql.repository.service';

@Injectable()
export class AuthRepositoryService {
  constructor(private readonly userRepository: MysqlRepositoryService) {}
  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userRepository.findOne();
    // if (user && user.password === pass) {
    //   const { password, ...result } = user;
    //   return result;
    // }
    return null;
  }
}
