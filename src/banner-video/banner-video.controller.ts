import { Controller, Get } from '@nestjs/common';
import { BannerVideoService } from './banner-video.service';

@Controller('bannerVideos')
export class BannerVideoController {
    constructor(private readonly bannerVideoService: BannerVideoService) { }

    @Get()
    async getBannerVideos() {
        return this.bannerVideoService.findAll();
    }
}
