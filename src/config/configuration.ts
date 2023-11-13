import { Configuration } from './configuration.interface';

export default ((): Configuration => ({
  rabbitmq_url: process.env.RABBITMQ_URL,
  database_url: process.env.DATABASE_URL,
  jwt_secret: process.env.JWT_SECRET
}));