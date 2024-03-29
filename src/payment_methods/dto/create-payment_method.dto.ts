import {  IsNotEmpty, IsString } from 'class-validator';

export class CreatePaymentMethodDto {

    @IsString()
    name: string;
    
    @IsNotEmpty()
    balance: number;

    current_balance: number;

    userId: number;
}
