import { Injectable } from '@nestjs/common';
import { Prisma, RelayTeam } from '@prisma/client';
import { PrismaBaseRepository } from 'src/shared/libs/prisma-base.repository';
import { PrismaService } from 'src/shared/module/prisma/prisma.service';
import { userMessage } from 'src/shared/keys/user.key';
import { RelayTeamCorePaginateDto } from './dto/relay-team-core.dto';

@Injectable()
export class RelayTeamCoreService extends PrismaBaseRepository<
  RelayTeam,
  RelayTeamCorePaginateDto,
  Prisma.RelayTeamCreateArgs,
  Prisma.RelayTeamUpdateArgs,
  Prisma.RelayTeamUpdateManyArgs,
  Prisma.RelayTeamFindUniqueArgs,
  Prisma.RelayTeamFindFirstArgs,
  Prisma.RelayTeamFindManyArgs,
  Prisma.RelayTeamDeleteArgs,
  Prisma.RelayTeamDeleteManyArgs,
  Prisma.RelayTeamCountArgs
> {
  constructor(public prisma: PrismaService) {
    super(prisma.relayTeam, {
      NOT_FOUND: userMessage.USER_NOT_FOUND,
      DELETED: userMessage.USER_IS_DELETED,
    });
  }
}
