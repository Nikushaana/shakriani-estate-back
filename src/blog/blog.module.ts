import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { Blog } from './entity/blog.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogsService } from './blog.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Blog]),
  ],
  providers: [BlogsService],
  exports: [BlogsService],
  controllers: [BlogController]
})
export class BlogModule { }
