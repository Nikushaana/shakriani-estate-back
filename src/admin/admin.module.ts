import { forwardRef, Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './entity/admin.entity';
import { AuthModule } from 'src/auth/auth.module';
import { TokenModule } from 'src/token/token.module';
import { AwardModule } from 'src/award/award.module';
import { BlogModule } from 'src/blog/blog.module';
import { WineModule } from 'src/wine/wine.module';
import { OrderModule } from 'src/order/order.module';
import { BannerVideoModule } from 'src/banner-video/banner-video.module';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Admin]),
    forwardRef(() => AuthModule),
    TokenModule,
    AwardModule,
    BlogModule,
    WineModule,
    OrderModule,
    BannerVideoModule,
    CloudinaryModule
  ],
  providers: [AdminService],
  controllers: [AdminController],
  exports: [AdminService],
})
export class AdminModule { }
