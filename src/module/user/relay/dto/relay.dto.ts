import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsBoolean,
  IsOptional,
  IsArray,
  ArrayMaxSize,
  ArrayMinSize,
} from 'class-validator';

export class CreateRelayDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  userId: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  templateId: string;
}

export class ToggleFeatureDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  relayId: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => value === 'true' || value === true)
  logo?: boolean;

  @ApiProperty({ required: false })
  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => value === 'true' || value === true)
  clientLogo?: boolean;

  @ApiProperty({ required: false })
  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => value === 'true' || value === true)
  leadCapture?: boolean;
}

export class FeatureValueDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  relayId: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  password?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  logo?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  clientLogo?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  leadCaptureForm?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  leadCaptureText?: string;
}

export class AddDemoContentDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  relayId: string;

  @ApiProperty({ required: true })
  @IsArray()
  @IsNotEmpty()
  @ArrayMinSize(4)
  @ArrayMaxSize(4)
  @IsString({ each: true })
  content?: string[];
}
