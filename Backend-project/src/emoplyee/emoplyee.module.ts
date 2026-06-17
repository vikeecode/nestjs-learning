import { Module } from '@nestjs/common';
import { EmoplyeeController } from './emoplyee.controller';
import { EmoplyeeService } from './emoplyee.service';

@Module({
  controllers: [EmoplyeeController],
  providers: [EmoplyeeService]
})
export class EmoplyeeModule {}
