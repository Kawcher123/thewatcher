import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentMethodsService } from 'src/payment_methods/payment_methods.service';
import { Between, Like, Repository } from 'typeorm';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { Expense } from './entities/expense.entity';
import { format } from 'date-fns';
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

    payment_methods.current_balance= payment_methods.current_balance-createExpenseDto.amount;

    await this.paymentMethodService.update(payment_methods.id,payment_methods);


    const expense=await this.expenseRepository.save(createExpenseDto);

    return {"data":expense};
  }



  

  async findAll(limit: number = 4, page: number = 1,userId:number): Promise<any> {
    
    const take = limit || 10
    const pageN=page || 1;
    const skip= (pageN-1) * take ;

    const [expenses, total] = await this.expenseRepository.findAndCount(
      {
          where: { userId }, order: { id: "DESC" },
          take: take,
          skip: skip
      }
  );

  //   const expenses=await this.expenseRepository.find({where:{userId},  order: {
     
  //         id: "DESC"
      
  // }});

    //const expenses = await this.expenseRepository.createQueryBuilder('userId').orderBy('id', 'DESC');

    return {"error":false,"data":expenses, "count": total};
  }





  async weekLyReport(userId:number,start:string,ending:string) {

    const expenses=await this.expenseRepository.find(
      {
        where:
        {
        
          userId:userId,
          created_at: Between(
            new Date(start+'T09:55:19.365Z'), 
            new Date(ending+'T09:55:19.365Z')
        ),
        },
      order: {
          id: "DESC"
      
  }});



    //const expenses = await this.expenseRepository.createQueryBuilder('userId').orderBy('id', 'DESC');

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
