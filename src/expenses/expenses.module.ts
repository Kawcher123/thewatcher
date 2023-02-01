import { Module } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { ExpensesController } from './expenses.controller';
import { Expense } from './entities/expense.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentMethodsModule } from 'src/payment_methods/payment_methods.module';
import { ExpenseCategoryModule } from 'src/expense_category/expense_category.module';

@Module({
  imports: [TypeOrmModule.forFeature([Expense]),PaymentMethodsModule,ExpenseCategoryModule],
  controllers: [ExpensesController],
  providers: [ExpensesService]
})
export class ExpensesModule {}
