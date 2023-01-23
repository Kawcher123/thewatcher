import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MyLoansService } from './my_loans.service';
import { CreateMyLoanDto } from './dto/create-my_loan.dto';
import { UpdateMyLoanDto } from './dto/update-my_loan.dto';

@Controller('my-loans')
export class MyLoansController {
  constructor(private readonly myLoansService: MyLoansService) {}

  @Post()
  create(@Body() createMyLoanDto: CreateMyLoanDto) {
    return this.myLoansService.create(createMyLoanDto);
  }

  @Get()
  findAll() {
    return this.myLoansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.myLoansService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMyLoanDto: UpdateMyLoanDto) {
    return this.myLoansService.update(+id, updateMyLoanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.myLoansService.remove(+id);
  }
}
