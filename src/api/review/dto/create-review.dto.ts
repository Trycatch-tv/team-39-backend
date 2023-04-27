import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateReviewDto {
  @IsNotEmpty()
  @IsString()
  comment: string;

  @IsNotEmpty()
  @IsArray()
  movie: number[];

  @IsNotEmpty()
  @IsArray()
  user: number[];
}
