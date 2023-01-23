import { Test, TestingModule } from '@nestjs/testing';
import { BeneficiaryContactsController } from './beneficiary_contacts.controller';
import { BeneficiaryContactsService } from './beneficiary_contacts.service';

describe('BeneficiaryContactsController', () => {
  let controller: BeneficiaryContactsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BeneficiaryContactsController],
      providers: [BeneficiaryContactsService],
    }).compile();

    controller = module.get<BeneficiaryContactsController>(BeneficiaryContactsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
