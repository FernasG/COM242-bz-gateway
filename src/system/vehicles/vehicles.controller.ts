import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, UseInterceptors } from '@nestjs/common';
import { ClientRMQ } from "@nestjs/microservices";
import { RabbitMQInterceptor } from "@libraries";
import { CreateVehicleDto, UpdateVehicleDto } from "./vehicles.interface";

@Controller('vehicles')
@UseInterceptors(RabbitMQInterceptor)
export class VehiclesController {
  constructor(@Inject('SYSTEM_SERVICE') private readonly clientRMQ: ClientRMQ) { }

  @Post()
  create(@Body() createVehicleDto: CreateVehicleDto) {
    return this.clientRMQ.send('createVeichle', createVehicleDto);
  }

  @Get(':user_id')
  findAll(@Param('user_id') user_id: string) {
    return this.clientRMQ.send('findAllUserVeichles', { user_id });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVehicleDto: UpdateVehicleDto) {
    return this.clientRMQ.send('updateVeichle', { id, ...updateVehicleDto });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientRMQ.send('removeVeichle', { id });
  }
}

