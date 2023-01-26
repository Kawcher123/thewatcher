import { Module } from '@nestjs/common';
import { MyContactsService } from './my_contacts.service';
import { MyContactsController } from './my_contacts.controller';
import { MyContact } from './entities/my_contact.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MyContact])],
  controllers: [MyContactsController],
  providers: [MyContactsService]
})
export class MyContactsModule {}
