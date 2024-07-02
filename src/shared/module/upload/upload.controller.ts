import { Controller, UseGuards, Get, Delete, Query } from '@nestjs/common';
import { UploadService } from './upload.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UploadFileDto } from './dto/upload.dto';
import { JwtAuthGuard } from './guards/jwt.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('Upload file to AWS S3')
@Controller('upload')
export class UploadController {
  constructor(private uploadService: UploadService) {}

  @Get('presinged-url')
  @ApiOperation({ summary: 'Get presinged url for upload file to s3 bucket' })
  async getPreSignedUrl(@Query() uploadFileDto: UploadFileDto) {
    return await this.uploadService.getPreSignedUrl({
      uploadFileDto,
    });
  }

  @ApiOperation({ summary: 'Delete file from s3 bucket' })
  @Delete('delete-file')
  async deleteFile(@Query() uploadFileDto: UploadFileDto) {
    return this.uploadService.removeFileFromS3({
      uploadFileDto,
    });
  }
}
