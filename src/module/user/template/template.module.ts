import { Module } from '@nestjs/common';
import { TemplateService } from './template.service';
import { TemplateController } from './template.controller';
import { TemplateCoreModule } from 'src/core/template-core/template-core.module';

@Module({
  imports: [TemplateCoreModule],
  controllers: [TemplateController],
  providers: [TemplateService],
})
export class TemplateModule {}
