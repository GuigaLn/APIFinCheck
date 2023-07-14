import { CreateUserDto } from 'src/modules/users/dto/create-user.dto';

export abstract class UsersRepositoryContract {
  abstract create(createUserDto: CreateUserDto): Promise<CreateUserDto>;
  abstract findByEmail(email: string): Promise<CreateUserDto>;
}
