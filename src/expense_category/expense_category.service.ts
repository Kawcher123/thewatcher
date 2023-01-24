import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExpenseCategoryDto } from './dto/create-expense_category.dto';
import { UpdateExpenseCategoryDto } from './dto/update-expense_category.dto';
import { ExpenseCategory } from './entities/expense_category.entity';

@Injectable()
export class ExpenseCategoryService {

  constructor(
    @InjectRepository(ExpenseCategory)
    private expenseRepository: Repository<ExpenseCategory>,
  ) {}


  create(createExpenseCategoryDto: CreateExpenseCategoryDto) {
    return 'This action adds a new expenseCategory';
  }

  async findAll() {
    const expense_category=await this.expenseRepository.find();
    return {"error":false,"data":expense_category};
  }

  findOne(id: number) {
    return `This action returns a #${id} expenseCategory`;
  }

  update(id: number, updateExpenseCategoryDto: UpdateExpenseCategoryDto) {
    return `This action updates a #${id} expenseCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} expenseCategory`;
  }
}
