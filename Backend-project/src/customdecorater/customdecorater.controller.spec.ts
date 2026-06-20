import { Test, TestingModule } from '@nestjs/testing';
import { CustomdecoraterController } from './customdecorater.controller';

describe('CustomdecoraterController', () => {
  let controller: CustomdecoraterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomdecoraterController],
    }).compile();

    controller = module.get<CustomdecoraterController>(CustomdecoraterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
