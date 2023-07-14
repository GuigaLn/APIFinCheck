import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { BcryptjsService } from 'src/shared/auth/bcryptjs.service';
import { CryptographyContract } from 'src/contracts/auth/cryptography.contracts';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    { provide: CryptographyContract, useClass: BcryptjsService },
  ],
})
export class UsersModule {}
