import { Test, TestingModule } from '@nestjs/testing';
import { EmoplyeeService } from './emoplyee.service';

describe('EmoplyeeService', () => {
  let service: EmoplyeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmoplyeeService],
    }).compile();

    service = module.get<EmoplyeeService>(EmoplyeeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
