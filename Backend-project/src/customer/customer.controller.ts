import { Controller, Get,Body,Post } from '@nestjs/common';
import { CustomerService} from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService:CustomerService){}

    @Get('allservices')
    getAllCustomer(){
        return this.customerService.getAllCustomer();  
      }
      @Post()
      createCustomer(@Body() createCustomerDto:CreateCustomerDto){
        return this.customerService.addCustomer(createCustomerDto)
    
      }

}
