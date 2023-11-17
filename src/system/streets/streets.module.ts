import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { StreetsController } from './streets.controller';
import { RabbitMQModuleAsync } from '@libraries';

@Module({
  imports: [
    ClientsModule.registerAsync(RabbitMQModuleAsync())
  ],
  controllers: [StreetsController]
})
export class StreetsModule { }