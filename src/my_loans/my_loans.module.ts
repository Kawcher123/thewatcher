import { Module } from '@nestjs/common';
import { MyLoansService } from './my_loans.service';
import { MyLoansController } from './my_loans.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MyLoan } from './entities/my_loan.entity';
import { PaymentMethodsModule } from 'src/payment_methods/payment_methods.module';

@Module({
  imports:[TypeOrmModule.forFeature([MyLoan]),PaymentMethodsModule],
  controllers: [MyLoansController],
  providers: [MyLoansService]
})
export class MyLoansModule {}
