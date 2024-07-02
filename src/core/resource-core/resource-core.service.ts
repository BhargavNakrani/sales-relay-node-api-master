import { Injectable } from '@nestjs/common';
import { Prisma, Resource } from '@prisma/client';
import { PrismaBaseRepository } from 'src/shared/libs/prisma-base.repository';
import { PrismaService } from 'src/shared/module/prisma/prisma.service';
import { contentMessages } from 'src/shared/keys/user.key';
import { ResourceCorePaginateDto } from './dto/resource-core.dto';

@Injectable()
export class ResourceCoreService extends PrismaBaseRepository<
  Resource,
  ResourceCorePaginateDto,
  Prisma.ResourceCreateArgs,
  Prisma.ResourceUpdateArgs,
  Prisma.ResourceUpdateManyArgs,
  Prisma.ResourceFindUniqueArgs,
  Prisma.ResourceFindFirstArgs,
  Prisma.ResourceFindManyArgs,
  Prisma.ResourceDeleteArgs,
  Prisma.ResourceDeleteManyArgs,
  Prisma.ResourceCountArgs
> {
  constructor(public prisma: PrismaService) {
    super(prisma.resource, {
      NOT_FOUND: contentMessages.CONTENT_NOT_FOUND,
      DELETED: contentMessages.CONTENT_IS_DELETED,
    });
  }
}
