import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Award } from './entity/award.entity';
import { AwardsService } from './award.service';
import { AwardController } from './award.controller';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Award]),
    CloudinaryModule
  ],
  providers: [AwardsService],
  exports: [AwardsService],
  controllers: [AwardController],
})
export class AwardModule { }