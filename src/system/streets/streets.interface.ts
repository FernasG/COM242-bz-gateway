import { IsEmail, IsString, Length, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateStreetDto {
  @IsString()
  @Length(10, 120)
  @IsNotEmpty()
  name: string;

  @IsString()
  @Length(10, 80)
  @IsNotEmpty()
  neighborhood: string;

  @IsString()
  @IsNotEmpty()
  qrcode_url: string;

  @IsNotEmpty()
  vacancies: number;
}

export class UpdateStreetDto {
  @IsString()
  @Length(10, 120)
  @IsOptional()
  name: string;

  @IsString()
  @Length(10, 80)
  @IsOptional()
  neighborhood: string;

  @IsString()
  @IsOptional()
  qrcode_url: string;

  @IsOptional()
  vacancies: number;
}