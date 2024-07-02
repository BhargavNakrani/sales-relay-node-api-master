import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/shared/module/prisma/prisma.module';
import { InformationDetailsCoreService } from './information-details-core.service';

@Module({
  imports: [PrismaModule],
  providers: [InformationDetailsCoreService],
  exports: [InformationDetailsCoreService],
})
export class InformationDetailsCoreModule {}
