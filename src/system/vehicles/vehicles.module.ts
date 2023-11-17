import { RabbitMQModuleAsync } from "@libraries";
import { Module } from "@nestjs/common";
import { ClientsModule } from "@nestjs/microservices";
import { VehiclesController } from "./vehicles.controller";

@Module({
  imports: [
    ClientsModule.registerAsync(RabbitMQModuleAsync())
  ],
  controllers: [VehiclesController]
})
export class VehiclesModule { }