import { PartialType } from '@nestjs/mapped-types';
import { CreateMyContactDto } from './create-my_contact.dto';

export class UpdateMyContactDto extends PartialType(CreateMyContactDto) {}
