import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MyContactsService } from './my_contacts.service';
import { CreateMyContactDto } from './dto/create-my_contact.dto';
import { UpdateMyContactDto } from './dto/update-my_contact.dto';

@Controller('my-contacts')
export class MyContactsController {
  constructor(private readonly myContactsService: MyContactsService) {}

  @Post()
  create(@Body() createMyContactDto: CreateMyContactDto) {
    return this.myContactsService.create(createMyContactDto);
  }

  @Get()
  findAll() {
    return this.myContactsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.myContactsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMyContactDto: UpdateMyContactDto) {
    return this.myContactsService.update(+id, updateMyContactDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.myContactsService.remove(+id);
  }
}
