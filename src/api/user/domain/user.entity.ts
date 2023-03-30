import { Role } from '../../../../src/shared/enums/role.enum';

export interface UserEntity {
  name: string;
  email: string;
  uuid?: string;
  password: string;
  roles?: Role[];
}
