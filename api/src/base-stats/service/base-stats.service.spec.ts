import { Test, TestingModule } from '@nestjs/testing';
import { BaseStatsService } from './base-stats.service';

describe('BaseStatsService', () => {
  let service: BaseStatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BaseStatsService],
    }).compile();

    service = module.get<BaseStatsService>(BaseStatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
