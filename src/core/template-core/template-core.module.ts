import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/shared/module/prisma/prisma.module';
import { TemplateCoreService } from './template-core.service';

@Module({
  imports: [PrismaModule],
  providers: [TemplateCoreService],
  exports: [TemplateCoreService],
})
export class TemplateCoreModule {}
