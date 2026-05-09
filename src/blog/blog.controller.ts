import { Controller, Get, Param } from '@nestjs/common';
import { BlogsService } from './blog.service';

@Controller('blogs')
export class BlogController {
    constructor(private readonly blogsService: BlogsService) { }

    @Get()
    async getBlogs() {
        return this.blogsService.findAll();
    }

    @Get('/:slug')
    async getOneBlog(
        @Param('slug') slug: string,
    ) {
        return this.blogsService.findOne(slug);
    }
}
