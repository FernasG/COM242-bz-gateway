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

  @Post()
  @Public()
  @UseInterceptors(FileInterceptor('file'))
  create(@Body() createStreetDto: CreateStreetDto, @UploadedFile() file) {
    return this.clientRMQ.send('createStreet', { ...createStreetDto, file });
  }

  @Get()
  findAll() {
    return this.clientRMQ.send('findAllStreets', {});
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.clientRMQ.send('findStreet', { id });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStreetDto: UpdateStreetDto) {
    return this.clientRMQ.send('updateStreet', { id, ...updateStreetDto });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientRMQ.send('deleteStreet', { id });
  }
}

