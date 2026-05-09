import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, Req, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { AdminService } from './admin.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { AwardsService } from 'src/award/award.service';
import { CreateAwardDto } from 'src/award/dto/create-award.dto';
import { UpdateAwardDto } from 'src/award/dto/update-award.dto';
import { CreateBlogDto } from 'src/blog/dto/create-blog.dto';
import { BlogsService } from 'src/blog/blog.service';
import { UpdateBlogDto } from 'src/blog/dto/update-blog.dto';
import { WinesService } from 'src/wine/wine.service';
import { UpdateWineDto } from 'src/wine/dto/update-wine.dto';
import { CreateWineDto } from 'src/wine/dto/create-wine.dto';
import { OrdersService } from 'src/order/order.service';
import { BannerVideoService } from 'src/banner-video/banner-video.service';

@Controller('admin')
@UseGuards(JwtAuthGuard)
export class AdminController {
    constructor(
        private readonly adminService: AdminService,
        private readonly awardsService: AwardsService,
        private readonly blogsService: BlogsService,
        private readonly winesService: WinesService,
        private readonly ordersService: OrdersService,
        private readonly bannerVideoService: BannerVideoService
    ) { }

    @Get('')
    async getMe(@Req() req) {
        return this.adminService.findById(req.user.id);
    }

    @Post('awards')
    @UseInterceptors(
        FileInterceptor('image', {
            storage: diskStorage({
                destination: './uploads/awards',
                filename: (req, file, callback) => {
                    const uniqueName =
                        Date.now() +
                        extname(file.originalname);

                    callback(null, uniqueName);
                },
            }),
        }),
    )
    async createAward(
        @UploadedFile() file: Express.Multer.File,
        @Body() dto: CreateAwardDto,
    ) {
        if (!file) {
            throw new BadRequestException('Image file is required');
        }

        return this.awardsService.create({
            image: `/uploads/awards/${file.filename}`,
            text: dto.text,
        });
    }

    @Get('awards')
    async getAwards() {
        return this.awardsService.findAll();
    }

    @Get('awards/:id')
    async getOneAward(
        @Param('id') id: string,
    ) {
        return this.awardsService.findOne(id);
    }

    @Patch('awards/:id')
    @UseInterceptors(
        FileInterceptor('image', {
            storage: diskStorage({
                destination: './uploads/awards',
                filename: (req, file, callback) => {
                    const uniqueName =
                        Date.now() +
                        extname(file.originalname);

                    callback(null, uniqueName);
                },
            }),
        }),
    )
    async updateAward(
        @Param('id') id: string,
        @UploadedFile() file: Express.Multer.File,
        @Body() dto: UpdateAwardDto,
    ) {
        const updateData: any = {
            text: dto.text,
        };

        if (file) {
            updateData.image = `/uploads/awards/${file.filename}`;
        }
        return this.awardsService.update(
            id,
            updateData
        );
    }

    @Delete('awards/:id')
    async deleteAward(
        @Param('id') id: string,
    ) {
        return this.awardsService.delete(id);
    }

    @Post('blogs')
    @UseInterceptors(
        FileInterceptor('image', {
            storage: diskStorage({
                destination: './uploads/blogs',
                filename: (req, file, callback) => {
                    const uniqueName =
                        Date.now() +
                        extname(file.originalname);

                    callback(null, uniqueName);
                },
            }),
        }),
    )
    async createBlog(
        @UploadedFile() file: Express.Multer.File,
        @Body() dto: CreateBlogDto,
    ) {
        if (!file) {
            throw new BadRequestException('Image file is required');
        }

        return this.blogsService.create({
            image: `/uploads/blogs/${file.filename}`,
            ...dto,
        });
    }

    @Get('blogs')
    async getBlogs() {
        return this.blogsService.findAll();
    }

    @Get('blogs/:slug')
    async getOneBlog(
        @Param('slug') slug: string,
    ) {
        return this.blogsService.findOne(slug);
    }

    @Patch('blogs/:slug')
    @UseInterceptors(
        FileInterceptor('image', {
            storage: diskStorage({
                destination: './uploads/blogs',
                filename: (req, file, callback) => {
                    const uniqueName =
                        Date.now() +
                        extname(file.originalname);

                    callback(null, uniqueName);
                },
            }),
        }),
    )
    async updateBlog(
        @Param('slug') slug: string,
        @UploadedFile() file: Express.Multer.File,
        @Body() dto: UpdateBlogDto,
    ) {
        const updateData: any = { ...dto };

        if (file) {
            updateData.image = `/uploads/blogs/${file.filename}`;
        }

        return this.blogsService.update(
            slug,
            updateData
        );
    }

    @Delete('blogs/:slug')
    async deleteBlog(
        @Param('slug') slug: string,
    ) {
        return this.blogsService.delete(slug);
    }

    @Post('wines')
    @UseInterceptors(
        FileInterceptor('image', {
            storage: diskStorage({
                destination: './uploads/wines',
                filename: (req, file, callback) => {
                    const uniqueName =
                        Date.now() +
                        extname(file.originalname);

                    callback(null, uniqueName);
                },
            }),
        }),
    )
    async createWine(
        @UploadedFile() file: Express.Multer.File,
        @Body() dto: CreateWineDto,
    ) {
        if (!file) {
            throw new BadRequestException('Image file is required');
        }

        return this.winesService.create({
            image: `/uploads/wines/${file.filename}`,
            ...dto,
        });
    }

    @Get('wines')
    async getWines() {
        return this.winesService.findAll();
    }

    @Get('wines/:slug')
    async getOneWine(
        @Param('slug') slug: string,
    ) {
        return this.winesService.findOne(slug);
    }

    @Patch('wines/:slug')
    @UseInterceptors(
        FileInterceptor('image', {
            storage: diskStorage({
                destination: './uploads/wines',
                filename: (req, file, callback) => {
                    const uniqueName =
                        Date.now() +
                        extname(file.originalname);

                    callback(null, uniqueName);
                },
            }),
        }),
    )
    async updateWine(
        @Param('slug') slug: string,
        @UploadedFile() file: Express.Multer.File,
        @Body() dto: UpdateWineDto,
    ) {
        const updateData: any = { ...dto };

        if (file) {
            updateData.image = `/uploads/wines/${file.filename}`;
        }

        return this.winesService.update(
            slug,
            updateData
        );
    }

    @Delete('wines/:slug')
    async deleteWine(
        @Param('slug') slug: string,
    ) {
        return this.winesService.delete(slug);
    }

    @Get('orders')
    async getOrder() {
        return this.ordersService.findAll();
    }

    @Get('orders/:id')
    async getOneOrder(
        @Param('id') id: string,
    ) {
        return this.ordersService.findOne(id);
    }

    @Post('bannerVideos')
    @UseInterceptors(
        FileInterceptor('video', {
            storage: diskStorage({
                destination: './uploads/bannerVideo',
                filename: (req, file, callback) => {
                    const uniqueName =
                        Date.now() +
                        extname(file.originalname);

                    callback(null, uniqueName);
                },
            }),
        }),
    )
    async createBannerVideo(
        @UploadedFile() file: Express.Multer.File
    ) {
        if (!file) {
            throw new BadRequestException('Video file is required');
        }

        return this.bannerVideoService.create({
            video: `/uploads/bannerVideo/${file.filename}`,
        });
    }

    @Get('bannerVideos')
    async getBannerVideos() {
        return this.bannerVideoService.findAll();
    }

    @Delete('bannerVideos/:id')
    async deleteBannerVideos(
        @Param('id') id: string,
    ) {
        return this.bannerVideoService.delete(id);
    }
}
