import { ApiProperty } from '@nestjs/swagger';
import { TEMPLATE_TYPE } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class TemplateDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  template: string;

  @ApiProperty({ enum: TEMPLATE_TYPE, required: true })
  @IsEnum(TEMPLATE_TYPE)
  @IsNotEmpty()
  type: TEMPLATE_TYPE;
}
