import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ProfileService {
    constructor(private userService:UsersService){}



    async getProfileData(email:string): Promise<any>
    {console.log(email);
        const user= await this.userService.findByEmail(email);

        console.log(user);
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
