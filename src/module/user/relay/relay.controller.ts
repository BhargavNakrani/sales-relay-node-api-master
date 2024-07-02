import { Controller, Get, Patch, Post, Query } from '@nestjs/common';
import { RelayService } from './relay.service';
import {
  AddDemoContentDto,
  CreateRelayDto,
  FeatureValueDto,
  ToggleFeatureDto,
} from './dto/relay.dto';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CoreIncludesDto } from 'src/core/base-query-core/dto/base-query-core.dto';

@Controller('relay')
@ApiTags('relay')
export class RelayController {
  constructor(private readonly relayService: RelayService) {}

  @Post()
  @ApiOperation({ summary: 'create relay' })
  async addTemp(@Query() createRelayDto: CreateRelayDto) {
    return await this.relayService.createRelay(createRelayDto);
  }

  @Get()
  @ApiOperation({ summary: 'get relay by id' })
  @ApiQuery({ name: 'relayId', required: true, type: String })
  async getRelay(
    @Query('relayId') relayId: string,
    @Query() coreIncludesDto: CoreIncludesDto,
  ) {
    return await this.relayService.getRelay(relayId, coreIncludesDto);
  }

  @Patch('feature-toggle')
  @ApiOperation({ summary: 'on/off relay features' })
  async toggleFeture(@Query() toggleFeatureDto: ToggleFeatureDto) {
    return await this.relayService.toggleFeature(toggleFeatureDto);
  }

  @Patch('feature-value')
  @ApiOperation({ summary: 'update relay feature value' })
  async fetureValue(@Query() featureValueDto: FeatureValueDto) {
    return await this.relayService.featureValue(featureValueDto);
  }

  @Post('demo-temp/content')
  @ApiOperation({ summary: 'add content for demo relay' })
  async addDemoContent(@Query() addDemoContentDto: AddDemoContentDto) {
    return await this.relayService.addDemoContent(addDemoContentDto);
  }
}
