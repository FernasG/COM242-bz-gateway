import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, UseInterceptors } from '@nestjs/common';
import { ClientRMQ } from '@nestjs/microservices';
import { Public } from 'src/auth/auth.decorators';
import { RabbitMQInterceptor } from '@libraries';
import { CreateParkingSessionDto, FinishParkingSessionDto, UpdateParkingSessionDto } from './parking_sessions.interface';

@Controller('users')
@UseInterceptors(RabbitMQInterceptor)
export class ParkingSessionsController {
  constructor(@Inject('SYSTEM_SERVICE') private readonly clientRMQ: ClientRMQ) { }

  @Post()
  @Public()
  create(@Body() createParkingSessionDto:CreateParkingSessionDto) {
    return this.clientRMQ.send('createParkingSession', createParkingSessionDto)
  }
  
  @Get(':street_id')
  findAllByStreet(@Param(':street_id') street_id: string) {
    return this.clientRMQ.send('listAllActivesParkingSessionsByStreet', { street_id })
  }

  @Patch(':id')
  update(@Param(':id') id: string, @Body() updateParkingSessionDto: UpdateParkingSessionDto) {
    return this.clientRMQ.send('updateParkingSessionInfos', { id, ...updateParkingSessionDto })
  }
  
  @Patch(':id')
  finish(@Param(':id') id: string, @Body() finishParkingSessionDto: FinishParkingSessionDto) {
    return this.clientRMQ.send('updateParkingSessionInfos', { id, ...finishParkingSessionDto })
  }

}
