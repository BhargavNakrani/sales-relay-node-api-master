import { ApiProperty } from '@nestjs/swagger';
import { Relay } from '@prisma/client';
import { IsArray } from 'class-validator';
import { CorePaginateDto } from 'src/core/base-query-core/dto/base-query-core.dto';

export class RelayCorePaginateDto extends CorePaginateDto {
  @ApiProperty({ required: true })
  @IsArray()
  list?: Relay[];
}
