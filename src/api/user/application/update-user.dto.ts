import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Role } from 'src/shared/enums/role.enum';

export default class UpdateUserDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  roles: Role[];
}
