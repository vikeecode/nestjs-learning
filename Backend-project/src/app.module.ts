import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmoplyeeModule } from './emoplyee/emoplyee.module';
import { StudentModule } from './student/student.module';
import { CustomerModule } from './customer/customer.module';
import { MynameController } from './myname/myname.controller';
import { UserRolesController } from './user-roles/user-roles.controller';
import { ExceptionController } from './exception/exception.controller';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import { DatabaseService } from './database/database.service';
import { DatabaseController } from './database/database.controller';
import { ConfigModule } from '@nestjs/config';
import { EvService } from './ev/ev.service';
import { EvController } from './ev/ev.controller';
import { CustomdecoraterModule } from './customdecorater/customdecorater.module';



@Module({
  imports: [EmoplyeeModule, StudentModule, CustomerModule,ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true
  }), CustomdecoraterModule],
  controllers: [AppController, UserController, ProductController, MynameController, UserRolesController, ExceptionController, DatabaseController, EvController],
  providers: [AppService, ProductService, DatabaseService, EvService],
})
export class AppModule implements NestModule {
  configure(customer: MiddlewareConsumer){
    customer.apply(LoggerMiddleware).forRoutes('*');
  }
}
