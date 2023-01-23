import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BeneficiaryContactsService } from './beneficiary_contacts.service';
import { CreateBeneficiaryContactDto } from './dto/create-beneficiary_contact.dto';
import { UpdateBeneficiaryContactDto } from './dto/update-beneficiary_contact.dto';

@Controller('beneficiary-contacts')
export class BeneficiaryContactsController {
  constructor(private readonly beneficiaryContactsService: BeneficiaryContactsService) {}

  @Post()
  create(@Body() createBeneficiaryContactDto: CreateBeneficiaryContactDto) {
    return this.beneficiaryContactsService.create(createBeneficiaryContactDto);
  }

  @Get()
  findAll() {
    return this.beneficiaryContactsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.beneficiaryContactsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBeneficiaryContactDto: UpdateBeneficiaryContactDto) {
    return this.beneficiaryContactsService.update(+id, updateBeneficiaryContactDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.beneficiaryContactsService.remove(+id);
  }
}
