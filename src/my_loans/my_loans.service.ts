import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentMethodsService } from 'src/payment_methods/payment_methods.service';
import { Repository } from 'typeorm';
import { CreateMyLoanDto } from './dto/create-my_loan.dto';
import { UpdateMyLoanDto } from './dto/update-my_loan.dto';
import { MyLoan } from './entities/my_loan.entity';

@Injectable()
export class MyLoansService {

  constructor(@InjectRepository(MyLoan)
  private myLoanRepo:Repository<MyLoan>,
  private paymentMethodService:PaymentMethodsService,){}



  async create(createMyLoanDto: CreateMyLoanDto) {

    const payment_method=await this.paymentMethodService.findOne(createMyLoanDto.paymentMethodId);

    if(payment_method)
    {
      
     if(createMyLoanDto.loanType=="1")
     {
       payment_method.current_balance= payment_method.current_balance+createMyLoanDto.loanAmount;

     }

    else
    {
      payment_method.current_balance= payment_method.current_balance-createMyLoanDto.loanAmount;


    }

    this.paymentMethodService.updateData(payment_method.id,payment_method);

    const my_loan=await this.myLoanRepo.save(createMyLoanDto);


    if(my_loan)
    {

      return {"error":false,"message":"Data saved successfully","data":my_loan};
    }
    else
    {

      return {"error":true,"message":"Failed to save data","data":my_loan};
    }

    }
    else
    {
      return {"error":true,"message":"Please select payment method","data":[]};
    }



  }

  async findAll(userId:number) {
    const my_loans=await this.myLoanRepo.find({where:{userId}});


    if(my_loans)
    {


      return {"error":false,"message":"Data retrieved successfully","data":my_loans};
    }
    else
    {

      return {"error":true,"message":"Failed to get data","data":my_loans};
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} myLoan`;
  }

  update(id: number, updateMyLoanDto: UpdateMyLoanDto) {
    return `This action updates a #${id} myLoan`;
  }

  remove(id: number) {
    return `This action removes a #${id} myLoan`;
  }
}
