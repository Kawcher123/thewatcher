import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentMethodsService } from 'src/payment_methods/payment_methods.service';
import { Between, Equal, LessThan, Like, Repository } from 'typeorm';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { Expense } from './entities/expense.entity';
import { format } from 'date-fns';
import { ExpenseCategoryService } from 'src/expense_category/expense_category.service';
import { ExpenseCategory } from 'src/expense_category/entities/expense_category.entity';
@Injectable()
export class ExpensesService {
  constructor(
    @InjectRepository(Expense)
    private expenseRepository: Repository<Expense>,
    private paymentMethodService: PaymentMethodsService,
    private expenseCategoryService: ExpenseCategoryService
  ) { }



  async create(createExpenseDto: CreateExpenseDto, userId: number) {

    createExpenseDto.userId = userId;

    const payment_methods = await this.paymentMethodService.findOne(createExpenseDto.paymentMethodId);

    payment_methods.current_balance = payment_methods.current_balance - createExpenseDto.amount;

    await this.paymentMethodService.update(payment_methods.id, payment_methods);


    const expense = await this.expenseRepository.save(createExpenseDto);

    return { "data": expense };
  }





  async findAll(limit: number = 4, page: number = 1, userId: number): Promise<any> {

    const take = limit || 4
    const pageN = page || 1;
    const skip = (pageN - 1) * take;

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

    return { "error": false, "data": expenses, "totalExpenses": total };
  }





  async weekLyReport(userId: number, start: string, ending: string) {

    var data: any = {};
    var categoryWiseExpense: any = [];

    var maxAmount: number = 0;

    var results: any = [];
    var perDay:any;
    var perDayExpense:any=[];

    var indexes: any = [];
    var index:number;

    var dates=[];
    console.log(start + ' 00:00:00', ending + ' 23:59:59');

    let expenses = await this.expenseRepository.find(
      {
   
        where:
        {
          userId: userId,
          created_at: Between(start + ' 00:00:00', ending + ' 23:59:59'),
        },
        order: {
          id: "DESC"

        },
        relations: { expenseCategory: true },
      });

    // const expenses = await this.expenseRepository.createQueryBuilder('expense')
    // .leftJoinAndMapOne(
    //   'expense.expense_category',
    //   ExpenseCategory,
    //   'expense_category',
    //   'expense_category.id = expense.expenseCategoryId'
    // ).
    // where('expense.created_at > :start AND expense.created_at <= :ending',{start:start,ending:ending}).
    // andWhere('expense.userId = :userId',{userId:userId}).
    // getRawMany()

    //   console.log({result});





    for (let i = 0; i < expenses.length; i++) {
      // const containsId = !!expenses.find(expe => {
      //   return expe.expenseCategoryId === expenses[i].expenseCategoryId
      // })

      //console.log(new Date(expenses[i].created_at).toLocaleDateString());

      for (let j = i; j < expenses.length; j++) {
       
        if (expenses[i].expenseCategoryId === expenses[j].expenseCategoryId) {
        
          data.category = expenses[i].expenseCategory.name;
          categoryWiseExpense.push(expenses[j]);

      //  if (new Date(expenses[i].created_at).toLocaleDateString() === new Date(expenses[j].created_at).toLocaleDateString()) {

      //       perDay=expenses[j].created_at;
      //       perDayExpense.push(expenses[j]);
      //     }

      
          if (expenses[i].amount > maxAmount) {
            maxAmount = expenses[i].amount;
          }
          index=expenses[i].expenseCategoryId;
        }
       
      }

      var newCategoryWiseData:any=[];

      console.log(categoryWiseExpense.length);

      for(let k=0;k<categoryWiseExpense.length;k++)
      {

        for(let l=k;l<categoryWiseExpense.length;l++)
        {
            if (new Date(categoryWiseExpense[k].created_at).toLocaleDateString() == new Date(categoryWiseExpense[l].created_at).toLocaleDateString()) {

            perDay=categoryWiseExpense[l].created_at;
            perDayExpense.push(categoryWiseExpense[l]);

        
          }  
        }
        if(dates.includes(perDay)==false) {
          
          newCategoryWiseData.push(
            {
              "day":perDay,
              "perDayData":perDayExpense
            }
          );
        }
   
        perDayExpense=[];
        dates.push(perDay);
      }

      console.log('/////\n');
      console.log(newCategoryWiseData);


      
      data.perCategory = newCategoryWiseData;
     // results.push(data);
     if(indexes.includes(expenses[i].expenseCategoryId)==false) {results.push(data);}
     indexes.push(index);
      categoryWiseExpense = [];
      newCategoryWiseData=[];
      data = {};

    }





    // for (let i = 0; i < expenses.length; i++) {


    //   for (let j = i; j < expenses.length; j++) {
    //     console.log(new Date(expenses[i].created_at).toLocaleDateString());
    //     if (expenses[i].expenseCategoryId == expenses[j].expenseCategoryId ) {

    //       data.category = expenses[j].expenseCategory.name;
    //       // if (new Date(expenses[i].created_at).toLocaleDateString() == new Date(expenses[j].created_at).toLocaleDateString()) {

    //       //   perDay=expenses[j].created_at;
    //       //   perDayExpense.push(expenses[j]);

    //       // }

    //       categoryWiseExpense.push(expenses[j]);
    //       if (expenses[i].amount > maxAmount) {
    //         maxAmount = expenses[i].amount;
    //       }   

    //     }


    //   }



    //   data.perCategory = categoryWiseExpense;
    //   results.push(data);
    //   categoryWiseExpense = [];
    //   perDayExpense = [];
    //   data = {};

    // }







    if (expenses) {
      return { "error": false, "message": "Data retrieved successfully", "maxAmount": maxAmount, "data": results };
    }
    else {
      return { "error": false, "message": "No data found", "maxAmount": maxAmount, "data": [] };
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
