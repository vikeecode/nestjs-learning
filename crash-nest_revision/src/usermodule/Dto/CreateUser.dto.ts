import { IsEmail, IsIdentityCard, IsNotEmpty } from "class-validator";

export class createUserDto  {

    @IsNotEmpty({message: 'id is required'})
    id!: number;
    @IsNotEmpty({message: 'username is required'})
    username!: string;

    @IsEmail()
    @IsNotEmpty({message: 'email is required'})
    email!:string;

    @IsNotEmpty({message: 'age is required'})
    age!: string;
}