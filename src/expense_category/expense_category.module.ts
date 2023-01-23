import { Module } from '@nestjs/common';
import { ExpenseCategoryService } from './expense_category.service';
import { ExpenseCategoryController } from './expense_category.controller';

@Module({
  controllers: [ExpenseCategoryController],
  providers: [ExpenseCategoryService]
})
export class ExpenseCategoryModule {}
