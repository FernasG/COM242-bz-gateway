import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, UseInterceptors } from '@nestjs/common';
import { ClientRMQ } from '@nestjs/microservices';
import { CreateSupervisiorDto, CreateUserDto, UpdateUserDto } from './users.interface';
import { Public } from 'src/auth/auth.decorators';
import { RabbitMQInterceptor } from '@libraries';

@Controller('users')
@UseInterceptors(RabbitMQInterceptor)
export class UsersController {
  constructor(@Inject('SYSTEM_SERVICE') private readonly clientRMQ: ClientRMQ) { }

  @Post()
  @Public()
  create(@Body() createUserDto: CreateUserDto) {
    return this.clientRMQ.send('createUser', createUserDto);
  }
  
  @Post(':streetId')
  createSupervisior(@Param('streetId') streetId: string ,@Body() createSupervisiorDto: CreateSupervisiorDto) {
    return this.clientRMQ.send('createSupervisior', createSupervisiorDto);
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
