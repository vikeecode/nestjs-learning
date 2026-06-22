import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { createUserDto } from 'src/usermodule/Dto/CreateUser.dto';

@Injectable()
export class ValidateUsersPipePipe implements PipeTransform {
  //custom pipe 
  transform(value: createUserDto, metadata: ArgumentMetadata) {
    console.log("ValidateUsersPipePipe");
    console.log(value);
    console.log(metadata);
    const pareseAgeInt = parseInt(value.age)

    if(isNaN(pareseAgeInt)){
      console.log(`Age ${value.age} is not a number`);
      throw new HttpException('Age is not a number', HttpStatus.BAD_REQUEST);
    }
    console.log(`${pareseAgeInt} is retruning a number ...`);
    return {...value, age: pareseAgeInt};
    
  }
}
