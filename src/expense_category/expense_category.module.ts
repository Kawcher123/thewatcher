import { Module } from '@nestjs/common';
import { ExpenseCategoryService } from './expense_category.service';
import { ExpenseCategoryController } from './expense_category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpenseCategory } from './entities/expense_category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExpenseCategory])],
  exports:[ExpenseCategoryService],
  controllers: [ExpenseCategoryController],
  providers: [ExpenseCategoryService]
})
export class ExpenseCategoryModule {}
