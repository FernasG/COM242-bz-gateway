import { ConfigService } from '@nestjs/config';
import { ClientsModuleAsyncOptions, Transport } from '@nestjs/microservices';

export const RabbitMQModuleAsync = ((): ClientsModuleAsyncOptions => {
  return [
    {
      name: 'SYSTEM_SERVICE',
      inject: [ConfigService],
      useFactory: ((configService: ConfigService) => ({
        transport: Transport.RMQ,
        options: {
          urls: [configService.get<string>('rabbitmq_url')],
          queue: 'system_queue',
          queueOptions: { durable: false }
        }
      }))
    }
  ];
});