import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ProfileService {
    constructor(private userService:UsersService){}



    async getProfileData(email:string): Promise<any>
    {
        const user= await this.userService.findByEmail(email);
     if(user)
      {  delete user.password;
        return {"error":false,"message":"User data retrieved Successfully","data":user};
    }
    else
    {
        return {"error":true,"message":"Failed to retrieved user data"};
    }
    }

}
