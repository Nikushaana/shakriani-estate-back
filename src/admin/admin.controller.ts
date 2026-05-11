import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, Req, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { AdminService } from './admin.service';
import { FileInterceptor } from '@nestjs/platform-express';
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
import { multerConfig } from 'src/common/upload/multer.config';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Controller('admin')
@UseGuards(JwtAuthGuard)
export class AdminController {
    constructor(
        private readonly adminService: AdminService,
        private readonly awardsService: AwardsService,
        private readonly blogsService: BlogsService,
        private readonly winesService: WinesService,
        private readonly ordersService: OrdersService,
        private readonly cloudinaryService: CloudinaryService
    ) { }

    @Get('')
    async getMe(@Req() req) {
        return this.adminService.findById(req.user.id);
    }

    @Post('awards')
    @UseInterceptors(
        FileInterceptor('image', multerConfig),
    )
    async createAward(
        @UploadedFile() file: Express.Multer.File,
        @Body() dto: CreateAwardDto,
    ) {
        if (!file) {
            throw new BadRequestException('Image file is required');
        }

        const upload = await this.cloudinaryService.uploadFile(
            file,
            'shakriani-estate/awards',
        );

        return this.awardsService.create({
            image: upload.secure_url,
            image_public_id: upload.public_id,
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
        FileInterceptor('image', multerConfig),
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
            const upload = await this.cloudinaryService.uploadFile(
                file,
                'shakriani-estate/awards',
            );

            updateData.image = upload.secure_url;
            updateData.image_public_id = upload.public_id;
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
        FileInterceptor('image', multerConfig),
    )
    async createBlog(
        @UploadedFile() file: Express.Multer.File,
        @Body() dto: CreateBlogDto,
    ) {
        if (!file) {
            throw new BadRequestException('Image file is required');
        }

        const upload = await this.cloudinaryService.uploadFile(
            file,
            'shakriani-estate/blogs',
        );

        return this.blogsService.create({
            image: upload.secure_url,
            image_public_id: upload.public_id,
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
        FileInterceptor('image', multerConfig),
    )
    async updateBlog(
        @Param('slug') slug: string,
        @UploadedFile() file: Express.Multer.File,
        @Body() dto: UpdateBlogDto,
    ) {
        const updateData: any = { ...dto };

        if (file) {
            const upload = await this.cloudinaryService.uploadFile(
                file,
                'shakriani-estate/blogs',
            );

            updateData.image = upload.secure_url;
            updateData.image_public_id = upload.public_id;
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
        FileInterceptor('image', multerConfig),
    )
    async createWine(
        @UploadedFile() file: Express.Multer.File,
        @Body() dto: CreateWineDto,
    ) {
        if (!file) {
            throw new BadRequestException('Image file is required');
        }

        const upload = await this.cloudinaryService.uploadFile(
            file,
            'shakriani-estate/wines',
        );

        return this.winesService.create({
            image: upload.secure_url,
            image_public_id: upload.public_id,
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
        FileInterceptor('image', multerConfig),
    )
    async updateWine(
        @Param('slug') slug: string,
        @UploadedFile() file: Express.Multer.File,
        @Body() dto: UpdateWineDto,
    ) {
        const updateData: any = { ...dto };

        if (file) {
            const upload = await this.cloudinaryService.uploadFile(
                file,
                'shakriani-estate/wines',
            );

            updateData.image = upload.secure_url;
            updateData.image_public_id = upload.public_id;
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

    @Delete('orders/:id')
    async deleteOrder( 
        @Param('id') id: string,
    ) {
        return this.ordersService.delete(id);
    }
}
