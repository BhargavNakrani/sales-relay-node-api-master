import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/shared/module/prisma/prisma.module';
import { RelayCoreService } from './relay-core.service';

@Module({
  imports: [PrismaModule],
  providers: [RelayCoreService],
  exports: [RelayCoreService],
})
export class RelayCoreModule {}
