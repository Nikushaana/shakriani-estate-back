import {
    ConflictException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from './entity/blog.entity';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class BlogsService {
    constructor(
        @InjectRepository(Blog)
        private readonly blogRepo: Repository<Blog>,

        private readonly cloudinaryService: CloudinaryService
    ) { }

    async create(data: {
        image: string;
        image_public_id: string;
        image_alt: string;
        small_text: string;
        text: string;
        meta_title: string;
        meta_description: string;
        slug: string;
    }) {
        const existing = await this.blogRepo.findOne({
            where: { slug: data.slug },
        });

        if (existing) {
            throw new ConflictException(
                'Blog with this slug already exists',
            );
        }

        const blog = this.blogRepo.create(data);

        return this.blogRepo.save(blog);
    }

    async findAll() {
        return this.blogRepo.find({
            order: {
                created_at: 'DESC',
            },
        });
    }

    async findOne(slug: string) {
        const blog = await this.blogRepo.findOne({
            where: { slug },
        });

        if (!blog) {
            throw new NotFoundException('Blog not found');
        }

        return blog;
    }

    async update(
        slug: string,
        data: {
            image?: string;
            image_public_id?: string;
            image_alt?: string;
            small_text?: string;
            text?: string;
            meta_title?: string;
            meta_description?: string;
            slug?: string;
        },
    ) {
        const blog = await this.findOne(slug);

        if (data.slug && data.slug !== slug) {
            const existing = await this.blogRepo.findOne({
                where: { slug: data.slug },
            });

            if (existing) {
                throw new ConflictException(
                    'Blog with this slug already exists',
                );
            }
        }

        if (data.image_public_id && blog.image_public_id) {
            await this.cloudinaryService.deleteFile(
                blog.image_public_id,
                'image',
            );
        }

        const updatedBlog = this.blogRepo.merge(
            blog,
            data,
        );

        return this.blogRepo.save(updatedBlog);
    }

    async delete(slug: string) {
        const blog = await this.findOne(slug);

        if (blog.image_public_id) {
            await this.cloudinaryService.deleteFile(
                blog.image_public_id,
                'image',
            );
        }

        await this.blogRepo.remove(blog);

        return {
            message: 'Blog deleted successfully',
        };
    }
}