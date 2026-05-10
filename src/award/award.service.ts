import {
    Injectable,
    NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Award } from './entity/award.entity';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class AwardsService {
    constructor(
        @InjectRepository(Award)
        private readonly awardRepo: Repository<Award>,

        private readonly cloudinaryService: CloudinaryService
    ) { }

    async create(data: {
        image: string;
        image_public_id: string;
        text: string;
    }) {
        const award = this.awardRepo.create(data);

        return this.awardRepo.save(award);
    }

    async findAll() {
        return this.awardRepo.find({
            order: {
                created_at: 'DESC',
            },
        });
    }

    async findOne(id: string) {
        const award = await this.awardRepo.findOne({
            where: { id },
        });

        if (!award) {
            throw new NotFoundException('Award not found');
        }

        return award;
    }

    async update(
        id: string,
        data: {
            image?: string;
            image_public_id?: string;
            text?: string;
        },
    ) {
        const award = await this.findOne(id);

        if (data.image_public_id && award.image_public_id) {
            await this.cloudinaryService.deleteFile(
                award.image_public_id,
                'image',
            );
        }

        const updatedAward = this.awardRepo.merge(
            award,
            data,
        );

        return this.awardRepo.save(updatedAward);
    }

    async delete(id: string) {
        const award = await this.findOne(id);

        if (award.image_public_id) {
            await this.cloudinaryService.deleteFile(
                award.image_public_id,
                'image',
            );
        }

        await this.awardRepo.remove(award);

        return {
            message: 'Award deleted successfully',
        };
    }
}