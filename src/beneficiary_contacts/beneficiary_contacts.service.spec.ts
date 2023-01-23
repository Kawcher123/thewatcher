import { Test, TestingModule } from '@nestjs/testing';
import { BeneficiaryContactsService } from './beneficiary_contacts.service';

describe('BeneficiaryContactsService', () => {
  let service: BeneficiaryContactsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BeneficiaryContactsService],
    }).compile();

    service = module.get<BeneficiaryContactsService>(BeneficiaryContactsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
