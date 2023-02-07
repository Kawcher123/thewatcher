import {  IsNotEmpty, IsString } from 'class-validator';


export class CreateExpenseDto {
    @IsString()
    name: string;
    
    @IsNotEmpty()
    amount: number;


    userId: number;
    
    @IsNotEmpty()
    expenseCategoryId:number;
    
    @IsNotEmpty()
    paymentMethodId:number;

    @IsNotEmpty()
    created_at:string


}
