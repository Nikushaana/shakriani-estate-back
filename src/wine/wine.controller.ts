import { Controller, Get, Param } from '@nestjs/common';
import { WinesService } from './wine.service';

@Controller('wines')
export class WineController {
    constructor(private readonly winesService: WinesService) { }

    @Get()
    async getBlogs() {
        return this.winesService.findAll();
    }

    @Get('/:slug')
    async getOneBlog(
        @Param('slug') slug: string,
    ) {
        return this.winesService.findOne(slug);
    }
}
