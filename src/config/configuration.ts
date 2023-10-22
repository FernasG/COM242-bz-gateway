import { Configuration } from './configuration.interface';

export default ((): Configuration => ({
  rabbitmq_url: process.env.RABBITMQ_URL
}));