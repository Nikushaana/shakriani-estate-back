import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Wine } from './entity/wine.entity';
import { Repository } from 'typeorm';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class WinesService {
    constructor(
        @InjectRepository(Wine)
        private readonly wineRepo: Repository<Wine>,

        private readonly cloudinaryService: CloudinaryService
    ) { }

    async create(data: {
        image: string;
        image_public_id: string;
        image_alt: string;
        name: string;
        type: string;
        year: string;
        price: string;
        description: string;
        alc: string;
        vol: string;
        origin: string;
        serve: string;
        meta_title: string;
        meta_description: string;
        slug: string;
    }) {
        const existing = await this.wineRepo.findOne({
            where: { slug: data.slug },
        });

        if (existing) {
            throw new ConflictException(
                'Wine with this slug already exists',
            );
        }

        const wine = this.wineRepo.create(data);

        return this.wineRepo.save(wine);
    }

    async findAll() {
        return this.wineRepo.find({
            order: {
                created_at: 'DESC',
            },
        });
    }

    async findOne(slug: string) {
        const wine = await this.wineRepo.findOne({
            where: { slug },
        });

        if (!wine) {
            throw new NotFoundException('Wine not found');
        }

        return wine;
    }

    async update(
        slug: string,
        data: {
            image?: string;
            image_public_id?: string;
            image_alt?: string;
            name?: string;
            type?: string;
            year?: string;
            price?: string;
            description?: string;
            alc?: string;
            vol?: string;
            origin?: string;
            serve?: string;
            meta_title?: string;
            meta_description?: string;
            slug?: string;
        },
    ) {
        const wine = await this.findOne(slug);

        if (data.slug && data.slug !== slug) {
            const existing = await this.wineRepo.findOne({
                where: { slug: data.slug },
            });

            if (existing) {
                throw new ConflictException(
                    'Wine with this slug already exists',
                );
            }
        }

        if (data.image_public_id && wine.image_public_id) {
            await this.cloudinaryService.deleteFile(
                wine.image_public_id,
                'image',
            );
        }

        const updatedWine = this.wineRepo.merge(
            wine,
            data,
        );

        return this.wineRepo.save(updatedWine);
    }

    async delete(slug: string) {
        const wine = await this.findOne(slug);

        if (wine.image_public_id) {
            await this.cloudinaryService.deleteFile(
                wine.image_public_id,
                'image',
            );
        }

        await this.wineRepo.remove(wine);

        return {
            message: 'Wine deleted successfully',
        };
    }
}
