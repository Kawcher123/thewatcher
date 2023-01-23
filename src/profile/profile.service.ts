import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ProfileService {
    constructor(private userService:UsersService){}



    async getProfileData(email:string): Promise<any>
    {
        const user= await this.userService.findByEmail(email);
        delete user.password;
        return user;
    }

}
