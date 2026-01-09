import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { NotesModule } from './notes/notes.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthModule } from './auth/auth.module';
import { HealthController } from './health.controller';

@Module({
  imports: [PrismaModule, NotesModule, CategoriesModule, AuthModule],
  controllers: [HealthController],
})
export class AppModule {}
