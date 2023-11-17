import { RabbitMQInterceptor } from "@libraries";
import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, UseInterceptors } from '@nestjs/common';
import { ClientRMQ } from "@nestjs/microservices";
import { Public } from "src/auth/auth.decorators";
import { CreateStreetDto, UpdateStreetDto } from "./streets.interface";

@Controller('vehicles')
@UseInterceptors(RabbitMQInterceptor)
export class StreetsController {
  constructor(@Inject('SYSTEM_SERVICE') private readonly clientRMQ: ClientRMQ) { }

  @Post(':user_id')
  @Public()
  create(@Param('user_id') user_id: string, @Body() createStreetDto: CreateStreetDto) {
    return this.clientRMQ.send('createStreet', {user_id, ...createStreetDto});
  }

  @Get()
  findAll() {
    return this.clientRMQ.send('findAllStreets', {});
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStreetDto: UpdateStreetDto) {
    return this.clientRMQ.send('updateStreets', { id, ...updateStreetDto });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientRMQ.send('deleteStreet', { id });
  }
}

