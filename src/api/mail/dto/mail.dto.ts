import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class MailDto {
  @IsString()
  @IsNotEmpty()
  to: string | string[];
  @IsString()
  @IsNotEmpty()
  from: string;
  @IsString()
  @IsOptional()
  bcc?: string;
  @IsString()
  @IsNotEmpty()
  subject: string;
  @IsString()
  @IsNotEmpty()
  template: string;
  @IsNotEmpty()
  data: any;
}
