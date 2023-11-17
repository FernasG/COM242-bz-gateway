import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { RabbitMQModuleAsync } from '@libraries';
import { ParkingSessionsController } from './parking_sessions.controller';

@Module({
  imports: [
    ClientsModule.registerAsync(RabbitMQModuleAsync())
  ],
  controllers: [ParkingSessionsController]
})
export class ParkingSessionsModule { }
