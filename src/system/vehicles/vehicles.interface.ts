import { IsNotEmpty, IsOptional, IsString, Length } from "class-validator";

export class CreateVehicleDto {
  @IsString()
  @IsNotEmpty()
  user_id: string;

  @IsString()
  @Length(6, 12)
  plate: string;
  
  @IsString()
  @Length(3, 20)
  manufacturer: string;
  
  @IsString()
  @Length(3, 20)
  model: string;
 
  @IsString()
  @Length(3, 20)
  color: string;
}

export class UpdateVehicleDto {
  @IsString()
  @IsOptional()
  @Length(6, 12)
  plate?: string;
  
  @IsString()
  @IsOptional()
  @Length(3, 20)
  manufacture?: string;
  
  @IsString()
  @IsOptional()
  @Length(3, 20)
  model?: string;
 
  @IsString()
  @IsOptional()
  @Length(3, 20)
  color?: string;
}