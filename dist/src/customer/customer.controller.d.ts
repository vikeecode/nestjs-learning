import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
export declare class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomerService);
    getAllCustomer(): import("./interfaces/customer.interface").Customer[];
    createCustomer(createCustomerDto: CreateCustomerDto): import("./interfaces/customer.interface").Customer;
}
