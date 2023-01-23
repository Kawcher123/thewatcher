import { Injectable } from '@nestjs/common';
import { CreateMyContactDto } from './dto/create-my_contact.dto';
import { UpdateMyContactDto } from './dto/update-my_contact.dto';

@Injectable()
export class MyContactsService {
  create(createMyContactDto: CreateMyContactDto) {
    return 'This action adds a new myContact';
  }

  findAll() {
    return `This action returns all myContacts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} myContact`;
  }

  update(id: number, updateMyContactDto: UpdateMyContactDto) {
    return `This action updates a #${id} myContact`;
  }

  remove(id: number) {
    return `This action removes a #${id} myContact`;
  }
}
