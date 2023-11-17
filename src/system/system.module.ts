import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { ParkingSessionsModule } from './parking_sessions/parking_sessions.module';
import { StreetsModule } from './streets/streets.module';

@Module({
  imports: [
    UsersModule,
    VehiclesModule,
    ParkingSessionsModule,
    StreetsModule,
  ]
})
export class SystemModule { }
