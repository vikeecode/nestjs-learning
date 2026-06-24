import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception:HttpException, host: ArgumentsHost) {
    console.log(exception);

    const ctx =  host.switchToHttp();
    const res = ctx.getResponse();
    const req =  ctx.getRequest();
    const status = exception.getStatus();

    res.status(status).json({
      sucess: false,
      statusCode:status,
      timestamp: new Date().toISOString(),
      path: req.url,
      message: exception.message
    })

  }
}
