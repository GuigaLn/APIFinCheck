import { ConflictException, Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from 'src/shared/database/prisma/repositories/users.repositories';
import { CryptographyContract } from 'src/contracts/auth/cryptography.contracts';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly cryptographyContract: CryptographyContract,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { name, email, password } = createUserDto;

    const emailTaken = await this.usersRepository.findByEmail(email);

    if (emailTaken) {
      throw new ConflictException('This email is already in use.');
    }

    const hashedPassword = await this.cryptographyContract.hash(password);

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    return { name: user.name, email: user.email };
  }
}
