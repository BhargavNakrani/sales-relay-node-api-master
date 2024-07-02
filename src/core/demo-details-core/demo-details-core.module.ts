import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/shared/module/prisma/prisma.module';
import { DemoDetailsCoreService } from './demo-details-core.service';

@Module({
  imports: [PrismaModule],
  providers: [DemoDetailsCoreService],
  exports: [DemoDetailsCoreService],
})
export class DemoDetailsCoreModule {}
