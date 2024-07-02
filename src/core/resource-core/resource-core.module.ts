import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/shared/module/prisma/prisma.module';
import { ResourceCoreService } from './resource-core.service';

@Module({
  imports: [PrismaModule],
  providers: [ResourceCoreService],
  exports: [ResourceCoreService],
})
export class ResourceCoreModule {}
