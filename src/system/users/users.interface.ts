import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto { }

export class UpdateUserDto extends PartialType(CreateUserDto) { }

export class SignInDto {
  email: string;
  password: string;
}