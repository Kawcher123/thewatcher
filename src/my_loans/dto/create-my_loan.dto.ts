import {  IsNotEmpty, IsString,IsEmail,IsNumber } from 'class-validator';

export class CreateMyLoanDto {


    @IsNotEmpty()
    @IsString()
    loanType: string;

    @IsNotEmpty()
    @IsNumber()
    loanAmount: number;

    @IsNotEmpty()
    @IsNumber()
    beneficiaryId: number;

    @IsNotEmpty()
    @IsNumber()
    paymentMethodId: number;

    userId:number
}
