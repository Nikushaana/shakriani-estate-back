import { Test, TestingModule } from '@nestjs/testing';
import { BannerVideoService } from './banner-video.service';

describe('BannerVideoService', () => {
  let service: BannerVideoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BannerVideoService],
    }).compile();

    service = module.get<BannerVideoService>(BannerVideoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
