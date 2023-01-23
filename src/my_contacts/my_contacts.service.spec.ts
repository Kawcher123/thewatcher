import { Test, TestingModule } from '@nestjs/testing';
import { MyContactsService } from './my_contacts.service';

describe('MyContactsService', () => {
  let service: MyContactsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyContactsService],
    }).compile();

    service = module.get<MyContactsService>(MyContactsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
