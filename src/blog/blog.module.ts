import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { Blog } from './entity/blog.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogsService } from './blog.service';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Blog]),
    CloudinaryModule
  ],
  providers: [BlogsService],
  exports: [BlogsService],
  controllers: [BlogController]
})
export class BlogModule { }
