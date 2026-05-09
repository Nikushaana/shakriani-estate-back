import { Test, TestingModule } from '@nestjs/testing';
import { BannerVideoController } from './banner-video.controller';

describe('BannerVideoController', () => {
  let controller: BannerVideoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BannerVideoController],
    }).compile();

    controller = module.get<BannerVideoController>(BannerVideoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
