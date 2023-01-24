import { Module } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { ExpensesController } from './expenses.controller';
import { Expense } from './entities/expense.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentMethodsModule } from 'src/payment_methods/payment_methods.module';

@Module({
  imports: [TypeOrmModule.forFeature([Expense]),PaymentMethodsModule],
  controllers: [ExpensesController],
  providers: [ExpensesService]
})
export class ExpensesModule {}
