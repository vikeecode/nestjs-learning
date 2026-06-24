import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from 'src/employees/entity/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(Employee) private employeeRepository: Repository<Employee>
    ) {}

    async getEmployee():Promise<Employee[]>{
        const findEmployee = await this.employeeRepository.find();
        console.log("employee",findEmployee);
        return findEmployee
    }

    async create(employeeData: Partial<Employee>): Promise<Employee>{
        const emplyee = this.employeeRepository.create(employeeData);
        console.log(emplyee);
        const employeeSave = await this.employeeRepository.save(emplyee);
        console.log(employeeSave);
        return employeeSave
    }



async getEmployeeById(id: number): Promise<Employee> {
  const employee = await this.employeeRepository.findOneBy({ id });

  if (!employee) {
    throw new NotFoundException(`Employee with ID ${id} not found`);
  }
  return employee;
}

//updated employee data
async updateEmployeData(id:number , updatedData: Partial<Employee>):Promise<Employee> {
    const employee = await this.employeeRepository.findOneBy({id})
    if(!employee){
        throw new NotFoundException(`Employee with ID ${id} not found`);
    }

    //updated a data 
    const update = Object.assign(employee, updatedData);
    const updatedEmployeeDataBase = await this.employeeRepository.save(update);
    return updatedEmployeeDataBase
}

//delete employee

async deleteEmployeeData(
  id: number,
): Promise<{
  message: string;
  employee: Employee;
}> {
  const employee = await this.employeeRepository.findOneBy({ id });

  if (!employee) {
    throw new NotFoundException(`Employee with ID ${id} not found`);
  }

  await this.employeeRepository.delete(id);

  return {
    message: `Employee with ID ${id} deleted successfully`,
    employee,
  };
}

// async deleteEmployeeData (id:number):Promise <{message: string;
//   employee: <Employee>}>{
//     const result = await this.employeeRepository.delete(id);
//     if(result.affected === 0){
//         throw new NotFoundException(`Employee with ID ${id} not found`);
//     }
//     return {
//         message: `Employee with ID ${id} deleted successfully`,
//         Employee: result
//     }
// }
}
