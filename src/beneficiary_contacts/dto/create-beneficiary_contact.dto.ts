import {  IsNotEmpty, IsString,IsEmail,IsPhoneNumber } from 'class-validator';
export class CreateBeneficiaryContactDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsPhoneNumber()
    phone: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    userId:number


}
