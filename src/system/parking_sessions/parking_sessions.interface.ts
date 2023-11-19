import { IsDate, IsString } from "class-validator"

export class CreateParkingSessionDto {
  @IsDate()
  entry_time: Date

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
  @IsDate()
  time?: Date
}