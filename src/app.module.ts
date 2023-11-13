import { Module } from '@nestjs/common';
import { SystemModule } from './system/system.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import configuration from './config/configuration';
import { PrismaModule } from '@database';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
    PrismaModule,
    SystemModule,
    AuthModule
  ]
})
export class AppModule { }
