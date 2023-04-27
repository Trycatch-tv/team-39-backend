import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateReviewDto {
  @IsNotEmpty()
  @IsString()
  comment: string;

  @IsNotEmpty()
  @IsArray()
  movie: any;

  @IsNotEmpty()
  @IsArray()
  user: any;
}
