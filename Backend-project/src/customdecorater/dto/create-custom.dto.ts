import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class CreateCustomDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  age: number;
}