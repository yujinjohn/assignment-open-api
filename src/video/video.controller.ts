import { Controller, Get, Query } from '@nestjs/common';
import { VideoService } from './video.service';

@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Get('info')
  async getVideoInfo(@Query('id') id: string): Promise<any> {
    return this.videoService.getVideoDetails(id);
  }
}


