import { Test, TestingModule } from '@nestjs/testing';
import { MyContactsController } from './my_contacts.controller';
import { MyContactsService } from './my_contacts.service';

describe('MyContactsController', () => {
  let controller: MyContactsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyContactsController],
      providers: [MyContactsService],
    }).compile();

    controller = module.get<MyContactsController>(MyContactsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
