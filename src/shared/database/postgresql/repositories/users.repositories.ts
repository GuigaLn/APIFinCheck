import { Injectable, NotImplementedException } from '@nestjs/common';
import { UsersRepositoryContract } from 'src/contracts/repositories/users.repositories.contracts';
import { CreateUserDto } from 'src/modules/users/dto/create-user.dto';

@Injectable()
export class UsersRepository implements UsersRepositoryContract {
  constructor(private readonly prismaService: any) {}

  async create(createDto: CreateUserDto) {
    throw new NotImplementedException();
  }

  async findByEmail(email: string) {
    throw new NotImplementedException();
  }
}
