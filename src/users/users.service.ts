import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  
 async create(createUserDto: CreateUserDto) {
    const user=await this.findByEmail(createUserDto.email);

    if(!user)
    {
      const hash = await bcrypt.hash(createUserDto.password, 10);
      createUserDto.password = hash;
      const user= await this.usersRepository.save(createUserDto);
      delete user.password;
      return user;
  
    }
    else
    {
      return {"message":"User already exist"};
    }


  }

 async findAll():Promise<User[]> {
    const user=await this.usersRepository.find();

    user.forEach(function (value) {
      delete value.password;
    }); 
   
    return user;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }


  findByEmail(email:string)
  {

    return this.usersRepository.findOne({where :{email}});
  }
}
