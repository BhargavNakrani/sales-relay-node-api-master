import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/shared/module/prisma/prisma.module';
import { RelayTeamCoreService } from './relay-team-core.service';

@Module({
  imports: [PrismaModule],
  providers: [RelayTeamCoreService],
  exports: [RelayTeamCoreService],
})
export class RelayTeamCoreModule {}
