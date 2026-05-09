import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Award } from './entity/award.entity';
import { AwardsService } from './award.service';
import { AwardController } from './award.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Award]),
  ],
  providers: [AwardsService],
  exports: [AwardsService],
  controllers: [AwardController],
})
export class AwardModule { }