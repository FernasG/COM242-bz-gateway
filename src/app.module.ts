import { Module } from '@nestjs/common';
import { SystemModule } from './system/system.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
    SystemModule
  ]
})
export class AppModule { }
