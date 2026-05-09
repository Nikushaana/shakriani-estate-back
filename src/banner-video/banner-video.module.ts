import { Module } from '@nestjs/common';
import { BannerVideoService } from './banner-video.service';
import { BannerVideoController } from './banner-video.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BannerVideo } from './entity/banner-video.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([BannerVideo]),
  ],
  providers: [BannerVideoService],
  exports: [BannerVideoService],
  controllers: [BannerVideoController]
})
export class BannerVideoModule { }
