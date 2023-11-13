import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '@database';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) { }

  public async signIn(username: string, password: string) {
    const user = this.prismaService.
  }
}
