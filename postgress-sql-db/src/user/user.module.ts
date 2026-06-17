import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
@Module({
    //register our scheme here
    imports:[TypeOrmModule.forFeature([User])],
})
export class UserModule {
}


