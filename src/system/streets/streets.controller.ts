import { RabbitMQInterceptor } from "@libraries";
import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ClientRMQ } from "@nestjs/microservices";
import { Public } from "src/auth/auth.decorators";
import { CreateStreetDto, UpdateStreetDto } from "./streets.interface";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller('streets')
@UseInterceptors(RabbitMQInterceptor)
export class StreetsController {
  constructor(@Inject('SYSTEM_SERVICE') private readonly clientRMQ: ClientRMQ) { }

  @Post(':user_id')
  @Public()
  @UseInterceptors(FileInterceptor('file'))
  create(@Param('user_id') user_id: string, @Body() createStreetDto: CreateStreetDto, @UploadedFile() file) {
    return this.clientRMQ.send('createStreet', {user_id, ...createStreetDto, file});
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

