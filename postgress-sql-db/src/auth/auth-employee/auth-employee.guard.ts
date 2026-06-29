// import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
// import { Observable } from 'rxjs';
// import * as jwt from 'jsonwebtoken';
// //import * as jose from 'jose';
// import {Request} from 'express';
// import { ConfigService } from '@nestjs/config';
// @Injectable()

// export class AuthEmployeeGuard implements CanActivate {
//   constructor( private serviceConfig: ConfigService ){}
//   canActivate(
//     context: ExecutionContext,
//   ): boolean | Promise<boolean> | Observable<boolean> {
//     const request = context.switchToHttp().getRequest<Request>();
//     const authHeader = request.headers['authorization'];
//     if(!authHeader || !authHeader.startsWith('Bearer ')){
//       throw new UnauthorizedException('No token Provided !')
//     }
//     const token = authHeader.split(' ')[1];
//     const jwtSecret = this.serviceConfig.get<string>('SUPABASE_JWT_SECRET');
//     if(!jwtSecret){
//       throw new UnauthorizedException('No token found !')
//     }
//     try {
//       console.log("Authorization Header:", authHeader);
//       console.log("Token:", token);
//       const decodedToken = jwt.verify(token, jwtSecret);
//       console.log(decodedToken);
//       return true;
      
//     } catch (error) {
//         console.log(error); 
//       throw new UnauthorizedException('Invalid token !')
//     }
  
//   }
// }



// you can write it like this above





//now you can write like this also
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { ConfigService } from '@nestjs/config';
import * as jose from 'jose';

@Injectable()
export class AuthEmployeeGuard implements CanActivate {
  private jwks: ReturnType<typeof jose.createRemoteJWKSet>;

  constructor(private serviceConfig: ConfigService) {
    const projectRef = this.serviceConfig.get<string>('SUPABASE_PROJECT_REF'); 
    this.jwks = jose.createRemoteJWKSet(
      new URL(`https://${projectRef}.supabase.co/auth/v1/.well-known/jwks.json`),
      { cooldownDuration: 60000 }
    );
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('No token Provided !');
    }

    const token = authHeader.split(' ')[1];
    const projectRef = this.serviceConfig.get<string>('SUPABASE_PROJECT_REF'); 

    try {
      const { payload } = await jose.jwtVerify(token, this.jwks, {
        issuer: `https://${projectRef}.supabase.co/auth/v1`,
      });
      (request as any).user = payload;
      return true;
    } catch (error) {
      console.log(error);
      throw new UnauthorizedException('Invalid token !');
    }
  }
}