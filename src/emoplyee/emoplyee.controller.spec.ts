import { Test, TestingModule } from '@nestjs/testing';
import { EmoplyeeController } from './emoplyee.controller';

describe('EmoplyeeController', () => {
  let controller: EmoplyeeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmoplyeeController],
    }).compile();

    controller = module.get<EmoplyeeController>(EmoplyeeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
