import { Controller, Get } from '@nestjs/common';
import { EmoplyeeService} from './emoplyee.service';
@Controller('emoplyee')
export class EmoplyeeController {
    constructor(private readonly employeService:EmoplyeeService){}
    @Get()
    getEmployee(){
        return this.employeService.getEmployees();
    }
}
