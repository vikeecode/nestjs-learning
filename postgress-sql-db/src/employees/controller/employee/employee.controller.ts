import { BadRequestException, Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, Query, UseFilters, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { EmployeeService } from '../../service/employee/employee.service';
import { Employee } from 'src/employees/entity/employee.entity';
import { EmployeeDto } from 'src/employees/dto/employee.dto';
import { HttpExceptionFilter } from 'src/employees/exception/http-exception/http-exception.filter';
import { AuthEmployeeGuard } from 'src/auth/auth-employee/auth-employee.guard';

@Controller('employee')
@UseFilters(new HttpExceptionFilter())
export class EmployeeController {
    constructor( private readonly employeeService:EmployeeService) {}
    //find all employee 
    @UseGuards(AuthEmployeeGuard)
    @Get('getEmployee')

    async getEmployee(){
        const employee = await this.employeeService.getEmployee();
        console.log("employee get data",employee);
        if (!employee) {
          throw new HttpException(
            'employee not found',
            HttpStatus.BAD_REQUEST,
          );
        }
        return employee
    }

    //create employee
     @Post('createEmployee')
    @UsePipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    exceptionFactory: (errors) => {
      const formattedErrors = errors.map((error) => ({
        field: error.property,
        errors: Object.values(error.constraints || {}),
      }));

      return new BadRequestException({
        message: 'Validation failed',
        errors: formattedErrors,
      });
    },
  }),
)
     async createEmployee(@Body() body:EmployeeDto):Promise<Employee>
{
    const employee = await this.employeeService.create(body);
    if (!employee) {
      throw new HttpException(
        'employee not created',
        HttpStatus.BAD_REQUEST,
      );
    }
    return employee
}
//search employee
@Get('searchEmployee')

async searchEmployee(@Query()filter:{
    name?:string;
    department?:string;
}):Promise<Employee[]>{
    const employee = await this.employeeService.search(filter);
    if(!employee){
        throw new HttpException('employee not found',HttpStatus.BAD_REQUEST);
    };

    return employee
}

//find by id employee 
@Get(':id')
async getEmployeeById(@Param('id', new ParseIntPipe) id:number):Promise<Employee>{
    const employee = await this.employeeService.getEmployeeById(id);
    if(!employee){
        throw new HttpException('employee not found',HttpStatus.BAD_REQUEST);
    }
    return employee
}

//update

@Put('updateEmployee/:id')
async updateEmployee (@Param('id', new ParseIntPipe) id:number , @Body() body:Partial<Employee>) : Promise<Employee>{
    const employee = await this.employeeService.updateEmployeData(id, body);

    if(!employee){
        throw new HttpException('employee not found', HttpStatus.BAD_REQUEST

        )
    }
    return employee
}

//delete
@Delete('deleteEmployee/:id')

deleteEmployee(@Param('id', new ParseIntPipe)  id: number ): Promise<{message:string, employee:Employee}>{
    const employeeDelete = this.employeeService.deleteEmployeeData(id);
    if(!employeeDelete){
        throw new HttpException('employee not found', HttpStatus.BAD_REQUEST)
    }
    return employeeDelete
}

}
