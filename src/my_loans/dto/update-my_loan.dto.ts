import { PartialType } from '@nestjs/mapped-types';
import { CreateMyLoanDto } from './create-my_loan.dto';

export class UpdateMyLoanDto extends PartialType(CreateMyLoanDto) {}
