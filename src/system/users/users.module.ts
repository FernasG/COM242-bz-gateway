import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { UsersController } from './users.controller';
import { RabbitMQModuleAsync } from 'src/libraries';

@Module({
  imports: [
    ClientsModule.registerAsync(RabbitMQModuleAsync())
  ],
  controllers: [UsersController]
})
export class UsersModule { }
