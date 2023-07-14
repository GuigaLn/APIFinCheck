import { Injectable } from '@nestjs/common';
import { hash as hashBcryptjs } from 'bcryptjs';
import { CryptographyContract } from 'src/contracts/auth/cryptography.contracts';

@Injectable()
export class BcryptjsService implements CryptographyContract {
  hash(value: string): Promise<string> {
    return hashBcryptjs(value, 12);
  }
}
