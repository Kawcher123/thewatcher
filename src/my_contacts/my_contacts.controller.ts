import { Controller, Get, Post, Body,Request, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MyContactsService } from './my_contacts.service';
import { CreateMyContactDto } from './dto/create-my_contact.dto';
import { UpdateMyContactDto } from './dto/update-my_contact.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('user/my-contacts')
export class MyContactsController {
  constructor(private readonly myContactsService: MyContactsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('/addContact')
  create(@Body() createMyContactDto: CreateMyContactDto,@Request() req:any) {
    return this.myContactsService.create(createMyContactDto,req.user.id);
  }


  @UseGuards(AuthGuard('jwt'))
  @Get('/myContacts')
  findAll(@Request() req:any) {
    return this.myContactsService.findAll(req.user.id);
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
