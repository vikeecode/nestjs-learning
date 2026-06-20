import { Module } from '@nestjs/common';
import { CustomdecoraterController } from './customdecorater.controller';

@Module({
  controllers: [CustomdecoraterController]
})
export class CustomdecoraterModule {}
