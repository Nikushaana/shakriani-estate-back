import { Module } from '@nestjs/common';
import { WineController } from './wine.controller';
import { WinesService } from './wine.service';
import { Wine } from './entity/wine.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Wine]),
    CloudinaryModule
  ],
  providers: [WinesService],
  exports: [WinesService],
  controllers: [WineController]
})
export class WineModule { }
