import { Module } from '@nestjs/common';
import { EmployeeService } from './service/employee/employee.service';
import { EmployeeController } from './controller/employee/employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entity/employee.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Employee])],
  providers: [ EmployeeService],
  controllers: [EmployeeController]
})
export class EmployeesModule {}
