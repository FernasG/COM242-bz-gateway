import { IsString, Length, IsNotEmpty, IsOptional, IsLatitude } from 'class-validator';

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

  @IsString()
  latitude: string;
  
  @IsString()
  longitude: string;
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

  @IsString()
  @IsOptional()
  latitude: string;
  
  @IsString()
  @IsOptional()
  longitude: string;
}