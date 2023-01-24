import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
    constructor(private userService:UsersService,private jwtService: JwtService){}


    async loginValidator(email:string,password:string): Promise<any>
    {
        const user= await this.userService.findByEmail(email);
        
     if(user)
     {
          const isMatch = await bcrypt.compare(password, user.password);

        if(isMatch )
        {
            delete user.password;
            return user;
        }
        else
        {
            return null;
        }
    }
    else
    {
        return null;
    }
    }


    async login(user: any) {
        const payload = {id: user.id,name:user.name,phone:user.phone, email: user.email};
        return {"statusCode":200,access_token: this.jwtService.sign(payload),
        }
          ;
      }
}
