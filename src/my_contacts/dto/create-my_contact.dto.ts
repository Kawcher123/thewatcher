import {  IsNotEmpty, IsString,IsEmail } from 'class-validator';

export class CreateMyContactDto {

    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsNotEmpty()
    phone: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;


    @IsNotEmpty()
    @IsString()
    company_name: string;

    @IsNotEmpty()
    @IsString()
    designation: string;

    userId: number;
}
