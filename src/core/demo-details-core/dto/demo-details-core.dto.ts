import { ApiProperty } from '@nestjs/swagger';
import { DemoDetails } from '@prisma/client';
import { IsArray } from 'class-validator';
import { CorePaginateDto } from 'src/core/base-query-core/dto/base-query-core.dto';

export class DemoDetailsCorePaginateDto extends CorePaginateDto {
  @ApiProperty({ required: true })
  @IsArray()
  list?: DemoDetails[];
}
