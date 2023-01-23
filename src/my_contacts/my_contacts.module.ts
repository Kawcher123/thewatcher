import { Module } from '@nestjs/common';
import { MyContactsService } from './my_contacts.service';
import { MyContactsController } from './my_contacts.controller';

@Module({
  controllers: [MyContactsController],
  providers: [MyContactsService]
})
export class MyContactsModule {}
