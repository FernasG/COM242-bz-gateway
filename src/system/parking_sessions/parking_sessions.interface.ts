import { IsDate, IsDateString, IsString } from "class-validator"

export class CreateParkingSessionDto {
  @IsDateString()
  entry_time: string

  @IsString()
  street_id: string

  @IsString()
  vehicle_id: string
}

export class UpdateParkingSessionDto {
  @IsString()
  street_id?: string

  @IsString()
  vehicle_id?: string
}

export class FinishParkingSessionDto {
  time?: string
}