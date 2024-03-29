import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBeneficiaryContactDto } from './dto/create-beneficiary_contact.dto';
import { UpdateBeneficiaryContactDto } from './dto/update-beneficiary_contact.dto';
import { BeneficiaryContact } from './entities/beneficiary_contact.entity';

@Injectable()
export class BeneficiaryContactsService {

  constructor(@InjectRepository(BeneficiaryContact)
  private beneficiaryContactRepo:Repository<BeneficiaryContact>){}

  async create(createBeneficiaryContactDto: CreateBeneficiaryContactDto,userId:number) {

    createBeneficiaryContactDto.userId=userId;
 
    const beneficiary_contact=await this.beneficiaryContactRepo.save(createBeneficiaryContactDto);
  if(beneficiary_contact){
    return {"error":false,"message":"Data saved successfully","data":beneficiary_contact};
}
else
{
 
  return {"error":true,"message":"Failed to save","data":beneficiary_contact};
}


  }



async findAll(userId:number) {
    const beneficiary_contacts=await this.beneficiaryContactRepo.find({where :{userId}});
if(beneficiary_contacts)
{
  return {"error":false,"message":"Data retrieved successfully","data":beneficiary_contacts};
}
else
{
  return {"error":true,"message":"Failed to get data","data":beneficiary_contacts};
}
   
  }




  findOne(id: number) {
    return `This action returns a #${id} beneficiaryContact`;
  }

  update(id: number, updateBeneficiaryContactDto: UpdateBeneficiaryContactDto) {
    return `This action updates a #${id} beneficiaryContact`;
  }

  remove(id: number) {
    return `This action removes a #${id} beneficiaryContact`;
  }
}
