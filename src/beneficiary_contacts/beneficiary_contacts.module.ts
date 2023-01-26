import { Module } from '@nestjs/common';
import { BeneficiaryContactsService } from './beneficiary_contacts.service';
import { BeneficiaryContactsController } from './beneficiary_contacts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BeneficiaryContact } from './entities/beneficiary_contact.entity';

@Module({
  imports:[TypeOrmModule.forFeature([BeneficiaryContact])],
  controllers: [BeneficiaryContactsController],
  providers: [BeneficiaryContactsService]
})
export class BeneficiaryContactsModule {}
