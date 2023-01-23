import { Test, TestingModule } from '@nestjs/testing';
import { MyLoansController } from './my_loans.controller';
import { MyLoansService } from './my_loans.service';

describe('MyLoansController', () => {
  let controller: MyLoansController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyLoansController],
      providers: [MyLoansService],
    }).compile();

    controller = module.get<MyLoansController>(MyLoansController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
