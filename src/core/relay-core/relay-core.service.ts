import { Injectable } from '@nestjs/common';
import { Prisma, Relay } from '@prisma/client';
import { PrismaBaseRepository } from 'src/shared/libs/prisma-base.repository';
import { PrismaService } from 'src/shared/module/prisma/prisma.service';
import { relayMessages } from 'src/shared/keys/user.key';
import { RelayCorePaginateDto } from './dto/relay-core.dto';

@Injectable()
export class RelayCoreService extends PrismaBaseRepository<
  Relay,
  RelayCorePaginateDto,
  Prisma.RelayCreateArgs,
  Prisma.RelayUpdateArgs,
  Prisma.RelayUpdateManyArgs,
  Prisma.RelayFindUniqueArgs,
  Prisma.RelayFindFirstArgs,
  Prisma.RelayFindManyArgs,
  Prisma.RelayDeleteArgs,
  Prisma.RelayDeleteManyArgs,
  Prisma.RelayCountArgs
> {
  constructor(public prisma: PrismaService) {
    super(prisma.relay, {
      NOT_FOUND: relayMessages.RELAY_NOT_FOUND,
      DELETED: relayMessages.RELAY_IS_DELETED,
    });
  }
}
