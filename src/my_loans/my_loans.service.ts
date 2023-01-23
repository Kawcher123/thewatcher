import { Injectable } from '@nestjs/common';
import { CreateMyLoanDto } from './dto/create-my_loan.dto';
import { UpdateMyLoanDto } from './dto/update-my_loan.dto';

@Injectable()
export class MyLoansService {
  create(createMyLoanDto: CreateMyLoanDto) {
    return 'This action adds a new myLoan';
  }

  findAll() {
    return `This action returns all myLoans`;
  }

  findOne(id: number) {
    return `This action returns a #${id} myLoan`;
  }

  update(id: number, updateMyLoanDto: UpdateMyLoanDto) {
    return `This action updates a #${id} myLoan`;
  }

  remove(id: number) {
    return `This action removes a #${id} myLoan`;
  }
}
