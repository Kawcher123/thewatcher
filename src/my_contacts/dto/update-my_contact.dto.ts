import { PartialType } from '@nestjs/mapped-types';
import { CreateMyContactDto } from './create-my_contact.dto';
import {  IsNotEmpty,IsNumber } from 'class-validator';

export class UpdateMyContactDto extends PartialType(CreateMyContactDto) {
    @IsNotEmpty()
    @IsNumber()
    id: number;
}
