import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { createUser } from 'src/utlis/type';

@Injectable()
export class UsersService {
    private fakeUser =  [{id:1,username: 'vikas', email: 'vikkke@gamil.com'},
        {id:2, username: 'vikas1', email: 'vikkke1@gamil.com' },
        {id:3, username: 'vikas2', email: 'vikkke2@gamil.com' },
    ]
    fetchUser(){
        return this.fakeUser;
    }

    createUser( user:createUser){
        this.fakeUser.push(user);
        return;
    }

    fetchUserById(id:number){
        return this.fakeUser[id];

    }

    deleteUserById(id:number){
        const user = this.fakeUser.splice(id, 1);
        if(!user){
            throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
        }
        return {
            message: 'User deleted',
        user
        }
    }
}
