import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmoplyeeModule } from './emoplyee/emoplyee.module';
import { StudentModule } from './student/student.module';
import { CustomerModule } from './customer/customer.module';
import { MynameController } from './myname/myname.controller';


@Module({
  imports: [EmoplyeeModule, StudentModule, CustomerModule],
  controllers: [AppController, UserController, ProductController, MynameController],
  providers: [AppService, ProductService],
})
export class AppModule {}
