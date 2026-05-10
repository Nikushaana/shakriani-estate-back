import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BannerVideo } from './entity/banner-video.entity';
import { Repository } from 'typeorm';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class BannerVideoService {
    constructor(
        @InjectRepository(BannerVideo)
        private readonly bannerVideoRepo: Repository<BannerVideo>,

        private readonly cloudinaryService: CloudinaryService
    ) { }

    async create(data: {
        video: string;
        video_public_id: string;
    }) {
        const bannerVideo = this.bannerVideoRepo.create(data);

        return this.bannerVideoRepo.save(bannerVideo);
    }

    async findAll() {
        return this.bannerVideoRepo.find({
            order: {
                created_at: 'DESC',
            },
        });
    }

    async delete(id: string) {
        const bannerVideo = await this.bannerVideoRepo.findOne({
            where: { id },
        });

        if (!bannerVideo) {
            throw new NotFoundException('Banner video not found');
        }

        if (bannerVideo.video_public_id) {
            await this.cloudinaryService.deleteFile(
                bannerVideo.video_public_id,
                'video',
            );
        }

        await this.bannerVideoRepo.remove(bannerVideo);

        return {
            message: 'Banner video deleted successfully',
        };
    }
}
