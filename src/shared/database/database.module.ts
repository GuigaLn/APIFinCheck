import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UsersRepository } from './prisma/repositories/users.repositories';

@Global()
@Module({
  providers: [PrismaService, UsersRepository],
  exports: [UsersRepository],
})
export class DatabaseModule {}
