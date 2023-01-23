

import { IsEmail, IsPhoneNumber, IsString } from 'class-validator';
import { Unique } from 'typeorm';

@Unique(['email'])
export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsPhoneNumber()
  phone: string;
  
  @IsString()
  blood_group: string;

  @IsString()
  password: string;
}


