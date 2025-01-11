import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideoService } from './video/video.service';
import { VideoController } from './video/video.controller';

@Module({
  imports: [],
  controllers: [AppController, VideoController],
  providers: [AppService, VideoService],
})
export class AppModule {}
