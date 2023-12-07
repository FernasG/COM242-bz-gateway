import { IsEmail, IsString, Length, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(10, 120)
  name: string;

  @IsEmail()
  @Length(10, 80)
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  cellphone: string;

  @IsString()
  @IsNotEmpty()
  register: string;
}

export class CreateSupervisiorDto {
  @IsString()
  @Length(10, 120)
  name: string;

  @IsEmail()
  @Length(10, 80)
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  cellphone: string;

  @IsString()
  @IsNotEmpty()
  register: string;
  
  @IsString()
  @IsNotEmpty()
  street_id: string;
}

export class UpdateUserDto {
  @IsEmail()
  @IsOptional()
  @Length(10, 80)
  email?: string;

  @IsString()
  @IsOptional()
  password?: string;

  @IsString()
  @IsOptional()
  cellphone?: string;
}