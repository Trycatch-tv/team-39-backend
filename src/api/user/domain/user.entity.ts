import { Role } from '../../../../src/shared/enums/role.enum';

export class UserEntity {
  first_name: string;
  last_name: string;
  email: string;
  uuid?: string;
  password: string;
  roles?: Role[];
  is_confirmed?: boolean;
  active?: boolean;
}
