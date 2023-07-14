import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './shared/database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { CategoryModule } from './modules/category/category.module';
import { CategoryModule } from './modules/category/category.module';
import { CategoryModule } from './modules/category/category.module';

@Module({
  imports: [UsersModule, DatabaseModule, AuthModule, CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
