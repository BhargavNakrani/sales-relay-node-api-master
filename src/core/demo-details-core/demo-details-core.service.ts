import { Injectable } from '@nestjs/common';
import { DemoDetails, Prisma } from '@prisma/client';
import { detailsMessages } from 'src/shared/keys/user.key';
import { PrismaBaseRepository } from 'src/shared/libs/prisma-base.repository';
import { PrismaService } from 'src/shared/module/prisma/prisma.service';
import { DemoDetailsCorePaginateDto } from './dto/demo-details-core.dto';

@Injectable()
export class DemoDetailsCoreService extends PrismaBaseRepository<
  DemoDetails,
  DemoDetailsCorePaginateDto,
  Prisma.DemoDetailsCreateArgs,
  Prisma.DemoDetailsUpdateArgs,
  Prisma.DemoDetailsUpdateManyArgs,
  Prisma.DemoDetailsFindUniqueArgs,
  Prisma.DemoDetailsFindFirstArgs,
  Prisma.DemoDetailsFindManyArgs,
  Prisma.DemoDetailsDeleteArgs,
  Prisma.DemoDetailsDeleteManyArgs,
  Prisma.DemoDetailsCountArgs
> {
  constructor(public prisma: PrismaService) {
    super(prisma.demoDetails, {
      NOT_FOUND: detailsMessages.DETAILS_NOT_FOUND,
      DELETED: detailsMessages.DETAILS_IS_DELETED,
    });
  }
}
