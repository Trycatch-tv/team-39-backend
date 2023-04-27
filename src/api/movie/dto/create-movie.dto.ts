import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateMovieDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  image: string;

  @IsOptional()
  @IsString()
  synopsis: string;

  @IsNotEmpty()
  @IsNumber()
  year: number;

  @IsOptional()
  @IsBoolean()
  active: boolean;

  @IsArray()
  @IsOptional()
  genres: number[];
}
