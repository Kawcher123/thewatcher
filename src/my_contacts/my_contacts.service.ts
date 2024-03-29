import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMyContactDto } from './dto/create-my_contact.dto';
import { UpdateMyContactDto } from './dto/update-my_contact.dto';
import { MyContact } from './entities/my_contact.entity';

@Injectable()
export class MyContactsService {

  constructor(
    @InjectRepository(MyContact)
    private myContactRepository: Repository<MyContact>,
  ) {}


  async create(createMyContactDto: CreateMyContactDto,userId:number) {

    createMyContactDto.userId=userId;

    const my_contact=await this.myContactRepository.save(createMyContactDto);

    return {"error":false,"message":"Data added successfully","data":my_contact};
  }

  async findAll(userId:number) {

    const my_contacts=await this.myContactRepository.find({where:{userId}});

    return {"error":false,"message":"Data retrieved successfully","data":my_contacts};
  }

  findOne(id: number) {
    return `This action returns a #${id} myContact`;
  }

  async update( updateMyContactDto: UpdateMyContactDto) {
    
    console.log(updateMyContactDto);
  
    const updated=await this.myContactRepository
    .createQueryBuilder()
    .update(updateMyContactDto)
    .set(updateMyContactDto)
    .where("id = :id", { id: updateMyContactDto.id })
    .andWhere("userId = :userId", { userId: updateMyContactDto.userId })
    .execute()

    console.log(updated);

    const updatedData=await this.myContactRepository.findOne({where:{id:updateMyContactDto.id,userId:updateMyContactDto.userId}});

   if(updatedData){
     return {"error":false,"message":"Data updated successfully","data":updatedData};
    }
    else
    {
      return {"error":true,"message":"Failed to update data","data":{}};
    }
  }

  remove(id: number) {
    return `This action removes a #${id} myContact`;
  }
}
