import { ApiProperty } from '@nestjs/swagger';
import { Transform, TransformFnParams } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export enum FILE_TYPE {
  IMAGE = 'IMAGE',
}

export enum RESOURCE_TYPE {
  CUSTOMER = 'CUSTOMER',
  WORKER = 'WORKER',
  SERVICE = 'SERVICE',
}

export class UploadFileDto {
  @ApiProperty()
  @IsString()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  fileName: string;

  @ApiProperty({ enum: FILE_TYPE })
  @IsEnum(FILE_TYPE)
  fileType: FILE_TYPE;

  @ApiProperty({ enum: RESOURCE_TYPE })
  @IsEnum(RESOURCE_TYPE)
  resourceType: RESOURCE_TYPE;
}
