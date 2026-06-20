import { Customer } from './interfaces/customer.interface';
import { CreateCustomerDto } from './dto/create-customer.dto';
export declare class CustomerService {
    private customers;
    getAllCustomer(): Customer[];
    addCustomer(createCustomerDto: CreateCustomerDto): Customer;
}
