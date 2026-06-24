
import { IsAlpha, IsAlphanumeric, IsNotEmpty } from 'class-validator';

export class EmployeeDto {

  @IsNotEmpty()
  @IsAlpha()
  name!: string;

  @IsNotEmpty()
  @IsAlpha()
  position!: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  department!: string;
}