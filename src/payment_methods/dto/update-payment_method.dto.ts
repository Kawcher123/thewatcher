import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentMethodDto } from './create-payment_method.dto';
import {  IsNotEmpty, IsNumber } from 'class-validator';
export class UpdatePaymentMethodDto extends PartialType(CreatePaymentMethodDto) {

    @IsNotEmpty()
    @IsNumber()
    id: number;
}
