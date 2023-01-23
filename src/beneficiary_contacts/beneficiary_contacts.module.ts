import { Module } from '@nestjs/common';
import { BeneficiaryContactsService } from './beneficiary_contacts.service';
import { BeneficiaryContactsController } from './beneficiary_contacts.controller';

@Module({
  controllers: [BeneficiaryContactsController],
  providers: [BeneficiaryContactsService]
})
export class BeneficiaryContactsModule {}
