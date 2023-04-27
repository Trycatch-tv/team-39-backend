import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateDirectorDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsBoolean()
  @IsOptional()
  active: boolean;
}
