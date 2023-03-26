import { UserEntity } from '../../../../src/api/user/domain/user.entity';
import UserValue from '../../../../src/api/user/domain/user.value';
import { IAuthUseCase } from '../domain/auth.use-case';
import { AuthRepositoryService } from '../infrastructure/repository/auth.repository.service';

export class AuthUseCase implements IAuthUseCase {
  constructor(private readonly authRepository: AuthRepositoryService) {}
  loginWithEmail(user: UserEntity): Promise<{ access_token: string }> {
    return this.authRepository.login(user);
  }
  registerWithEmail(user: UserEntity): Promise<UserEntity> {
    return this.authRepository.registerUser(new UserValue(user));
  }
}
