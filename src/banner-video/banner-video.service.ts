import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BannerVideo } from './entity/banner-video.entity';
import { Repository } from 'typeorm';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class BannerVideoService {
    constructor(
        @InjectRepository(BannerVideo)
        private readonly bannerVideoRepo: Repository<BannerVideo>,
    ) { }

    async create(data: {
        video: string;
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

        if (bannerVideo.video) {
            const oldPath = path.join(
                process.cwd(),
                bannerVideo.video,
            );

            if (fs.existsSync(oldPath)) {
                fs.unlinkSync(oldPath);
            }
        }

        await this.bannerVideoRepo.remove(bannerVideo);

        return {
            message: 'Banner video deleted successfully',
        };
    }
}
