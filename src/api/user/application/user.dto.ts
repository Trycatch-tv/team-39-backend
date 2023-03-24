import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export default class UserDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
