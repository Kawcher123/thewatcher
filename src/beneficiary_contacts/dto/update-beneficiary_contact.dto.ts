import { PartialType } from '@nestjs/mapped-types';
import { CreateBeneficiaryContactDto } from './create-beneficiary_contact.dto';

export class UpdateBeneficiaryContactDto extends PartialType(CreateBeneficiaryContactDto) {}
