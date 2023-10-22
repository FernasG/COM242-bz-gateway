import { Controller, Get, Post, Body, Patch, Param, Delete, OnModuleInit, Inject } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './users.interface';
import { ClientRMQ } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
  constructor(@Inject('SYSTEM_SERVICE') private clientRMQ: ClientRMQ) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.clientRMQ.send('createUser', createUserDto);
  }

  @Get()
  findAll() {
    return this.clientRMQ.send('findAllUsers', {});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientRMQ.send('findOneUser', { id });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.clientRMQ.send('updateUser', { id, ...updateUserDto });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientRMQ.send('removeUser', { id });
  }
}
