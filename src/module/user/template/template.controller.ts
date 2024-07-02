import { Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { TemplateService } from './template.service';
import { ApiOperation, ApiQuery } from '@nestjs/swagger';
import { TemplateDto } from './dto/template.dto';
import { BaseQueryCoreDto } from 'src/core/base-query-core/dto/base-query-core.dto';
import { UUID } from 'crypto';

@Controller('template')
export class TemplateController {
  constructor(private readonly templateService: TemplateService) {}

  @Post('')
  @ApiOperation({ summary: 'Add template' })
  async addTemp(@Query() templateDto: TemplateDto) {
    return await this.templateService.addTemp(templateDto);
  }

  @Get('')
  @ApiOperation({ summary: 'Get template' })
  async getTemp(@Query() baseQueryCoreDto: BaseQueryCoreDto) {
    return await this.templateService.getTemp(baseQueryCoreDto);
  }

  @Delete('')
  @ApiOperation({ summary: 'Delete template' })
  @ApiQuery({ name: 'templateId', required: true, type: String })
  async deleteTemp(@Query('templateId') templateId: UUID) {
    return await this.templateService.deleteTemp(templateId);
  }
}
