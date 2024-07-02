import { BadRequestException, Injectable } from '@nestjs/common';
import { TemplateCoreService } from 'src/core/template-core/template-core.service';
import { TemplateDto } from './dto/template.dto';
import { TEMPLATE_TYPE } from '@prisma/client';
import { templateMssages } from 'src/shared/keys/user.key';
import { BaseQueryCoreDto } from 'src/core/base-query-core/dto/base-query-core.dto';

@Injectable()
export class TemplateService {
  constructor(private templateCoreService: TemplateCoreService) {}

  async addTemp(templateDto: TemplateDto) {
    const { template, type } = templateDto;

    const typeExist = await this.templateCoreService.findFirst({
      where: { templateType: type, isDeleted: false },
    });

    if (typeExist) {
      throw new BadRequestException(templateMssages.TEMPLATE_TYPE_EXIST);
    }

    const temp = await this.templateCoreService.create({
      data: { template, templateType: type as TEMPLATE_TYPE },
    });

    return temp;
  }

  async getTemp(baseQueryCoreDto: BaseQueryCoreDto) {
    const templates = await this.templateCoreService.findPaginate(
      baseQueryCoreDto,
      { isDeleted: false },
    );

    return templates;
  }

  async deleteTemp(templateId: string) {
    const tempExist = await this.templateCoreService.findFirst({
      where: { id: templateId, isDeleted: false },
    });

    if (!tempExist) {
      throw new BadRequestException(templateMssages.TEMPLATE_NOT_FOUND);
    }

    await this.templateCoreService.update({
      where: { id: tempExist.id },
      data: { isDeleted: true },
    });

    return {
      success: true,
      status: 200,
      message: templateMssages.TEMPLATE_IS_DELETED,
    };
  }
}
