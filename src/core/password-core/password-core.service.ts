import { Injectable } from '@nestjs/common';
import { Password, Prisma } from '@prisma/client';
import { PrismaBaseRepository } from 'src/shared/libs/prisma-base.repository';
import { PrismaService } from 'src/shared/module/prisma/prisma.service';
import { passwordMessages } from 'src/shared/keys/user.key';
import { PasswordCorePaginateDto } from './dto/password-core.dto';

@Injectable()
export class PasswordCoreService extends PrismaBaseRepository<
  Password,
  PasswordCorePaginateDto,
  Prisma.PasswordCreateArgs,
  Prisma.PasswordUpdateArgs,
  Prisma.PasswordUpdateManyArgs,
  Prisma.PasswordFindUniqueArgs,
  Prisma.PasswordFindFirstArgs,
  Prisma.PasswordFindManyArgs,
  Prisma.PasswordDeleteArgs,
  Prisma.PasswordDeleteManyArgs,
  Prisma.PasswordCountArgs
> {
  constructor(public prisma: PrismaService) {
    super(prisma.password, {
      NOT_FOUND: passwordMessages.PASSWORD_NOT_FOUND,
      DELETED: passwordMessages.PASSWORD_IS_DELETED,
    });
  }
}
