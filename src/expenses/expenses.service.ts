import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentMethodsService } from 'src/payment_methods/payment_methods.service';
import { Repository } from 'typeorm';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { Expense } from './entities/expense.entity';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectRepository(Expense)
    private expenseRepository: Repository<Expense>,
    private paymentMethodService:PaymentMethodsService,
  ) {}

  

  async create(createExpenseDto: CreateExpenseDto,userId:number) {

    createExpenseDto.userId=userId;

    const payment_methods=await this.paymentMethodService.findOne(createExpenseDto.paymentMethodId);

    payment_methods.current_balance= payment_methods.balance-createExpenseDto.amount;

    this.paymentMethodService.update(payment_methods.id,payment_methods);


    const expense=await this.expenseRepository.save(createExpenseDto);

    return {"data":expense};
  }

  async findAll(userId:number) {

    const expenses=await this.expenseRepository.find({where:{userId}});

    if(expenses)
   {
     return {"error":false,"data":expenses};
    }
    else
    {
      return {"error":false,"data":[]};
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} expense`;
  }

  update(id: number, updateExpenseDto: UpdateExpenseDto) {
    return `This action updates a #${id} expense`;
  }

  remove(id: number) {
    return `This action removes a #${id} expense`;
  }
}
