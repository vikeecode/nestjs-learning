import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { UsermoduleModule } from './usermodule/usermodule.module';


@Module({
  imports: [UsermoduleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
