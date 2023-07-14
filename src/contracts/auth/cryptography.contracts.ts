export abstract class CryptographyContract {
  abstract hash(value: string): Promise<string>;
}
