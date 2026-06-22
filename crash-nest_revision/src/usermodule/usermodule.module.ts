import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { ExampleMiddleware } from './middleware/example/example.middleware';
import { AnotherMiddleware } from './middleware/another/another.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsermoduleModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    //and routes
    // consumer.apply(ExampleMiddleware).forRoutes("users");
    //pass like a controller
   // consumer.apply(ExampleMiddleware).forRoutes(UsersController);

   //or you can specify the route or you can pass multiple routes
   consumer.apply(ExampleMiddleware).forRoutes({
    path: 'users',
    method: RequestMethod.GET
   },
  {
    path: 'users/:id',
    method: RequestMethod.GET
  }
  ).apply(AnotherMiddleware).forRoutes({
     path: 'users',
    method: RequestMethod.GET
   },
  {
    path: 'users/:id',
    method: RequestMethod.GET
  }
  )
  }
}
