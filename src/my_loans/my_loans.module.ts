import { Module } from '@nestjs/common';
import { MyLoansService } from './my_loans.service';
import { MyLoansController } from './my_loans.controller';

@Module({
  controllers: [MyLoansController],
  providers: [MyLoansService]
})
export class MyLoansModule {}
