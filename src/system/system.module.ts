import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { StreetsModule } from './streets/streets.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { ParkingSessionsModule } from './parking_sessions/parking_sessions.module';

@Module({
  imports: [
    UsersModule,
    StreetsModule,
    VehiclesModule,
    ParkingSessionsModule
  ]
})
export class SystemModule { }
