import { Injectable } from '@nestjs/common';
import { InformationDetails, Prisma } from '@prisma/client';
import { PrismaBaseRepository } from 'src/shared/libs/prisma-base.repository';
import { PrismaService } from 'src/shared/module/prisma/prisma.service';
import { detailsMessages } from 'src/shared/keys/user.key';
import { InformationDetailsCorePaginateDto } from './dto/information-details-core.dto';

@Injectable()
export class InformationDetailsCoreService extends PrismaBaseRepository<
  InformationDetails,
  InformationDetailsCorePaginateDto,
  Prisma.InformationDetailsCreateArgs,
  Prisma.InformationDetailsUpdateArgs,
  Prisma.InformationDetailsUpdateManyArgs,
  Prisma.InformationDetailsFindUniqueArgs,
  Prisma.InformationDetailsFindFirstArgs,
  Prisma.InformationDetailsFindManyArgs,
  Prisma.InformationDetailsDeleteArgs,
  Prisma.InformationDetailsDeleteManyArgs,
  Prisma.InformationDetailsCountArgs
> {
  constructor(public prisma: PrismaService) {
    super(prisma.informationDetails, {
      NOT_FOUND: detailsMessages.DETAILS_NOT_FOUND,
      DELETED: detailsMessages.DETAILS_IS_DELETED,
    });
  }
}
