import { Controller, Get, Post, Body,Request, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MyLoansService } from './my_loans.service';
import { CreateMyLoanDto } from './dto/create-my_loan.dto';
import { UpdateMyLoanDto } from './dto/update-my_loan.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('user/my-loans')
export class MyLoansController {
  constructor(private readonly myLoansService: MyLoansService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('/addLoans')
  create(@Body() createMyLoanDto: CreateMyLoanDto,@Request() req:any) {
    createMyLoanDto.userId=req.user.id;
    return this.myLoansService.create(createMyLoanDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/myLoanList')
  findAll(@Request() req:any) {
    return this.myLoansService.findAll(req.user.id);
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
