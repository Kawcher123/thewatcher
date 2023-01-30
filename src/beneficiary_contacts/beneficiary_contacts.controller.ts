import { Controller, Get, Post, Body,Request, Patch, Param, Delete } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { BeneficiaryContactsService } from './beneficiary_contacts.service';
import { CreateBeneficiaryContactDto } from './dto/create-beneficiary_contact.dto';
import { UpdateBeneficiaryContactDto } from './dto/update-beneficiary_contact.dto';

@Controller('user/beneficiary-contacts')
export class BeneficiaryContactsController {
  constructor(private readonly beneficiaryContactsService: BeneficiaryContactsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('/addBeneficiaryContact')
  create(@Body() createBeneficiaryContactDto: CreateBeneficiaryContactDto,@Request() req:any) {
    return this.beneficiaryContactsService.create(createBeneficiaryContactDto,req.user.id);
  }
  

  @UseGuards(AuthGuard('jwt'))
  @Get('/getBeneficiaryContacts')
  findAll(@Request() req:any) {
    return this.beneficiaryContactsService.findAll(req.user.id);
  }

  @UseGuards(AuthGuard('jwt'))
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
