import { Injectable } from '@nestjs/common';
import { Prisma, Template } from '@prisma/client';
import { PrismaBaseRepository } from 'src/shared/libs/prisma-base.repository';
import { PrismaService } from 'src/shared/module/prisma/prisma.service';
import { templateMssages } from 'src/shared/keys/user.key';
import { TemplateCorePaginateDto } from './dto/template-core.dto';

@Injectable()
export class TemplateCoreService extends PrismaBaseRepository<
  Template,
  TemplateCorePaginateDto,
  Prisma.TemplateCreateArgs,
  Prisma.TemplateUpdateArgs,
  Prisma.TemplateUpdateManyArgs,
  Prisma.TemplateFindUniqueArgs,
  Prisma.TemplateFindFirstArgs,
  Prisma.TemplateFindManyArgs,
  Prisma.TemplateDeleteArgs,
  Prisma.TemplateDeleteManyArgs,
  Prisma.TemplateCountArgs
> {
  constructor(public prisma: PrismaService) {
    super(prisma.template, {
      NOT_FOUND: templateMssages.TEMPLATE_NOT_FOUND,
      DELETED: templateMssages.TEMPLATE_IS_DELETED,
    });
  }
}
