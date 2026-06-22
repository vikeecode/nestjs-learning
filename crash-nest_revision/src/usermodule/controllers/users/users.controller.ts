import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseBoolPipe, ParseIntPipe, Post, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
//import type { Request, Response } from 'express';
import { createUserDto } from 'src/usermodule/Dto/CreateUser.dto';
import { AuthGuardGuard } from 'src/usermodule/guards/auth-guard/auth-guard.guard';
import { ValidateUsersPipePipe } from 'src/usermodule/pipes/validate-users-pipe/validate-users-pipe.pipe';
import { UsersService } from 'src/usermodule/services/users/users.service';

@Controller('users')
//if you want proctect hole in one controller then use it 
//@UseGuards(AuthGuardGuard )
export class UsersController {
    constructor(private userService:UsersService){}
  @Get()
  //or if you protect a specific route then use like this 
  @UseGuards(AuthGuardGuard )
  getUser() {
    // return {
    //   username: 'vikas',
    //   email: 'vikkke@gamil.com',
    // };
    return this.userService.fetchUser();
  }
//   @Get('posts')
//   getUserPost(){
//     return [
//         {
//              username: 'vikas',
//       email: 'vikkke@gamil.com',
//       posts:[{
//         id:1,
//         title:'first post',
//         description:'this is first post'
//       }]
//         }
//     ]
//   }
//   @Get('/posts/comments')
//   getUserPostsComments(){
//     return [
//         {
//             id:1,
//             title:'Post 1',
//             comments:[{
//                 id:1,
//                 comment:'first comment'
//             }]
//         }
//     ]
//   }
//it look like a express
// @Post('posts')
// createUser(@Req() request: Request, @Res() response: Response){
//  console.log(request.body);
//  response.send('User Created');
// }
//now itis a nest js 
@Post('posts')
@UsePipes(new ValidationPipe())
createUser(@Body(ValidateUsersPipePipe) userData:createUserDto){
    console.log(userData)
   return  this.userService.createUser(userData);
    // return {};
   
}
//with to fetch user by id
@Get('fake/:id')
getUsersById(@Param('id', ParseIntPipe) id:number){
    // console.log(id);
    const user  = this.userService.fetchUserById(id);
    if(!user){
        throw new HttpException('User not found' , HttpStatus.BAD_REQUEST);
    }
    return user;
}

//params
@Get(':id/:postId')
getUserById(@Param('id', ParseIntPipe) id:number, @Param('postId') postId:string){
console.log(id);
return {id, postId};
}
//query parameter
@Get('search')
searchUser(@Query('sortDesc', ParseBoolPipe) sortBy: boolean){
    console.log(sortBy);
    return {};
}


}
