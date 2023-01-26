import { Module } from '@nestjs/common';
import { MyLoansService } from './my_loans.service';
import { MyLoansController } from './my_loans.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MyLoan } from './entities/my_loan.entity';

@Module({
  imports:[TypeOrmModule.forFeature([MyLoan])],
  controllers: [MyLoansController],
  providers: [MyLoansService]
})
export class MyLoansModule {}
