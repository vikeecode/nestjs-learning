import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesModule } from './employees/employees.module';
 console.log(process.env.DATABASE_URL);
@Module({
  imports: [
    ConfigModule.forRoot(
      {
          isGlobal: true,
      }
    ),
    //you can write like this ok but asa of now i am using supbase then i will write like different
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: process.env.DB_HOST,
    //   port: parseInt(process.env.DB_PORT),
    //   username: process.env.DB_USERNAME,
    //   password: process.env.DB_PASSWORD,
    //   database: process.env.DB_NAME,
    //   autoLoadEntities: true,
    //   synchronize: true
    // })
   
    TypeOrmModule.forRoot({ 
      type: 'postgres',
      url:process.env.DATABASE_URL,
       ssl: {
    rejectUnauthorized: false,
  },
      autoLoadEntities: true,
      synchronize: true
    }),
    UserModule,
    EmployeesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
