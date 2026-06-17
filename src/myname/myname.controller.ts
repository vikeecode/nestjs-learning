import { Body, Controller, Post } from '@nestjs/common';
import {UppercasePipe} from '../common/pipes/uppercase/uppercase.pipe';

@Controller('myname')
export class MynameController {
    @Post('custom')
    tranfromName(@Body('name', new UppercasePipe()) name:string){
        return {
            message: `My name is ${name}`
        }
    }
}
