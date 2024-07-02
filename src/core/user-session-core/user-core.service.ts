import { Injectable } from '@nestjs/common';
import { Prisma, UserSession } from '@prisma/client';
import { PrismaBaseRepository } from 'src/shared/libs/prisma-base.repository';
import { PrismaService } from 'src/shared/module/prisma/prisma.service';
import { sessionMessage } from 'src/shared/keys/user.key';
import { UserSessionCorePaginateDto } from './dto/user-session-core.dto';

@Injectable()
export class UserSessionCoreService extends PrismaBaseRepository<
  UserSession,
  UserSessionCorePaginateDto,
  Prisma.UserSessionCreateArgs,
  Prisma.UserSessionUpdateArgs,
  Prisma.UserSessionUpdateManyArgs,
  Prisma.UserSessionFindUniqueArgs,
  Prisma.UserSessionFindFirstArgs,
  Prisma.UserSessionFindManyArgs,
  Prisma.UserSessionDeleteArgs,
  Prisma.UserSessionDeleteManyArgs,
  Prisma.UserSessionCountArgs
> {
  constructor(public prisma: PrismaService) {
    super(prisma.userSession, {
      NOT_FOUND: sessionMessage.SESSION_NOT_FOUND,
      DELETED: sessionMessage.SESSION_IS_DELETED,
    });
  }
}
