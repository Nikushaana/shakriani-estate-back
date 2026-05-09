import { Controller, Get } from '@nestjs/common';
import { AwardsService } from './award.service';

@Controller('awards')
export class AwardController {
    constructor(private readonly awardsService: AwardsService) { }

    @Get()
    async findAll() {
        return this.awardsService.findAll();
    }
}