import { Injectable } from '@nestjs/common';

@Injectable()
export class EmoplyeeService {
    getEmployees(){
        return [ 'Akash', 'Vishal', 'Akshay'  ]
    }
}
