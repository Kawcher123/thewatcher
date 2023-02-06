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
     return {"error":false,"message":"Data retrieved successfully","data":paymentMethods};
    }
    else
    {
      return {"error":true,"message":"No data found","data":[]};
    }
  }

  findOne(id: number,userId:number)
   {
    return this.paymentMethodRepository.findOne({where:{id:id,userId:userId}});
  
  }

  async update(id: number, updatePaymentMethodDto: UpdatePaymentMethodDto)
   {
    updatePaymentMethodDto.current_balance=updatePaymentMethodDto.balance;
    //const updated=await this.paymentMethodRepository.update(id,updatePaymentMethodDto);

    const updated=await this.paymentMethodRepository
    .createQueryBuilder()
    .update(updatePaymentMethodDto)
    .set({ balance: updatePaymentMethodDto.balance, current_balance: updatePaymentMethodDto.current_balance, name:updatePaymentMethodDto.name })
    .where("id = :id", { id: id })
    .andWhere("userId = :userId", { userId: updatePaymentMethodDto.userId })
    .execute()

    console.log(updated);

    const updatedData=await this.paymentMethodRepository.findOne({where:{id:id,userId:updatePaymentMethodDto.userId}});

   if(updatedData){
     return {"error":false,"message":"Data updated successfully","data":updatedData};
    }
    else
    {
      return {"error":true,"message":"Failed to update data"};
    }
  }



  async updateData(id: number, updatePaymentMethodDto: UpdatePaymentMethodDto)
  {

   const updated=await this.paymentMethodRepository.update(id,updatePaymentMethodDto);

 }

  async remove(id: number,userId:number) {
    //const deleted=await this.paymentMethodRepository.delete(id);

    console.log(userId);

   try {
    const deleted= await this.paymentMethodRepository
    .createQueryBuilder('payment_method')
    .softDelete()
    .from(PaymentMethod)
    .where("id = :id", { id: id})
    .andWhere("userId = :userId", { userId: userId})
    .execute()

    console.log(deleted.affected);

    if(deleted.affected==1)
    {
      return {"error":false,"message":"Data deleted successfully"};
    }
    else
    {
      return {"error":true,"message":"Failed to delete data"};
    }
  }
   catch (error) {
  console.log(error);
   }
  }
}
