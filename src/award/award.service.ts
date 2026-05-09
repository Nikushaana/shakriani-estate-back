import {
    Injectable,
    NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as fs from 'fs';
import * as path from 'path';
import { Award } from './entity/award.entity';

@Injectable()
export class AwardsService {
    constructor(
        @InjectRepository(Award)
        private readonly awardRepo: Repository<Award>,
    ) { }

    async create(data: {
        image: string;
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
            text?: string;
        },
    ) {
        const award = await this.findOne(id);

        if (data.image && award.image) {
            const oldPath = path.join(
                process.cwd(),
                award.image,
            );

            if (fs.existsSync(oldPath)) {
                fs.unlinkSync(oldPath);
            }
        }

        const updatedAward = this.awardRepo.merge(
            award,
            data,
        );

        return this.awardRepo.save(updatedAward);
    }

    async delete(id: string) {
        const award = await this.findOne(id);

        if (award.image) {
            const oldPath = path.join(
                process.cwd(),
                award.image,
            );

            if (fs.existsSync(oldPath)) {
                fs.unlinkSync(oldPath);
            }
        }

        await this.awardRepo.remove(award);

        return {
            message: 'Award deleted successfully',
        };
    }
}