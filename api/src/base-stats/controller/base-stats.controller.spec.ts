import { Test, TestingModule } from '@nestjs/testing';
import { BaseStatsController } from './base-stats.controller';

describe('BaseStatsController', () => {
  let controller: BaseStatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BaseStatsController],
    }).compile();

    controller = module.get<BaseStatsController>(BaseStatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
