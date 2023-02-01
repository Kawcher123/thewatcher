import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePaymentMethodDto } from './dto/create-payment_method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment_method.dto';
import { PaymentMethod } from './entities/payment_method.entity';

@Injectable()
export class PaymentMethodsService {

  constructor(
    @InjectRepository(PaymentMethod)
    private paymentMethodRepository: Repository<PaymentMethod>,
  ) {}
  
  async create(createPaymentMethodDto: CreatePaymentMethodDto,userId:number) {
    createPaymentMethodDto.userId=userId;
    createPaymentMethodDto.current_balance=createPaymentMethodDto.balance;
    const payment_method=await this.paymentMethodRepository.save(createPaymentMethodDto); 
    
    return payment_method;
  }

  async findAll(userId:number): Promise<any>{
    const paymentMethods=await this.paymentMethodRepository.find({where:{userId}});
   if(paymentMethods)
   {
     return {"error":false,"data":paymentMethods};
    }
    else
    {
      return {"error":false,"data":[]};
    }
  }

  findOne(id: number)
   {
    return this.paymentMethodRepository.findOne({where:{id}});
  
  }

  async update(id: number, updatePaymentMethodDto: UpdatePaymentMethodDto)
   {
    updatePaymentMethodDto.current_balance=updatePaymentMethodDto.balance;
    const updated=await this.paymentMethodRepository.update(id,updatePaymentMethodDto);

    const updatedData=await this.paymentMethodRepository.findOne({where:{id}});

    return {"error":false,"message":"Data updated successfully","data":updatedData};
  }

  async remove(id: number) {
    const deleted=await this.paymentMethodRepository.delete(id);
    return {"error":false,"message":"Data delted successfully"};
  }
}
