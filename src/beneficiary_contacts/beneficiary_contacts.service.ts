import { Injectable } from '@nestjs/common';
import { CreateBeneficiaryContactDto } from './dto/create-beneficiary_contact.dto';
import { UpdateBeneficiaryContactDto } from './dto/update-beneficiary_contact.dto';

@Injectable()
export class BeneficiaryContactsService {
  create(createBeneficiaryContactDto: CreateBeneficiaryContactDto) {
    return 'This action adds a new beneficiaryContact';
  }

  findAll() {
    return `This action returns all beneficiaryContacts`;
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
