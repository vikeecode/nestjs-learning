import { createParamDecorator,ExecutionContext } from '@nestjs/common';

const users = 
    {
        id:1,
        name:"Rahul",
        age:23
    }
    // {
    //     id:2,
    //     name:"Rohit",
    //     age:22
    // },
    // {
    //     id:3,
    //     name:"Raj",
    //     age:21
    // }



export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    return users;
  },
);

