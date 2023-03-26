import { UserEntity } from 'src/api/user/domain/user.entity';
import { LoginEntity } from './login.entity';

export interface IAuthUseCase {
  loginWithEmail(crendetials: LoginEntity): Promise<{ access_token: string }>;
  registerWithEmail(user: UserEntity): Promise<UserEntity>;
}
