import { Role } from '../../../../src/shared/enums/role.enum';

export interface UserEntity {
  first_name: string;
  last_name: string;
  email: string;
  uuid?: string;
  password: string;
  roles?: Role[];
}
