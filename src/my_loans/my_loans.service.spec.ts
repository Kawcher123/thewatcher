import { Test, TestingModule } from '@nestjs/testing';
import { MyLoansService } from './my_loans.service';

describe('MyLoansService', () => {
  let service: MyLoansService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyLoansService],
    }).compile();

    service = module.get<MyLoansService>(MyLoansService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
