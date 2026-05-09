import { Module } from '@nestjs/common';
import { WineController } from './wine.controller';
import { WinesService } from './wine.service';
import { Wine } from './entity/wine.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Wine]),
  ],
  providers: [WinesService],
  exports: [WinesService],
  controllers: [WineController]
})
export class WineModule { }
