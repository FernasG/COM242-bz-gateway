import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SystemModule } from './system/system.module';
import { PrismaModule } from '@database';
import { AuthModule } from './auth/auth.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
    AuthModule,
    PrismaModule,
    SystemModule
  ]
})
export class AppModule { }
