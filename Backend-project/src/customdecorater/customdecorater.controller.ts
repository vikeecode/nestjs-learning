import { Controller, Get, ValidationPipe } from '@nestjs/common';
import { User } from './user.decorater';
import { CreateCustomDto } from './dto/create-custom.dto';

@Controller('customdecorater')
export class CustomdecoraterController {
  // @Get('user')

  // alluser(@User(new ValidationPipe({validateCustomDecorators: true})) data:any): CreateCustomDto {
  //     console.log(data);
  //     return data as CreateCustomDto;
  // }

  @Get('user')
  alluser(
    @User(
      new ValidationPipe({
        validateCustomDecorators: true,
      }),
    )
    data: CreateCustomDto,
  ) {
    console.log(data);
    return data;
  }
}
