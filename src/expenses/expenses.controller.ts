import { Controller, Get, Post, Body,Request, Patch, Param, Delete, UseGuards,Query } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('user/expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}


  @UseGuards(AuthGuard('jwt'))
  @Post('/addExpense')
  create(@Body() createExpenseDto: CreateExpenseDto,@Request() req:any) {
    return this.expensesService.create(createExpenseDto,req.user.id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/expenseList')
  findAll(@Query() { limit, page },@Request() req:any) {
    return this.expensesService.findAll(limit,page,req.user.id);
  }


  @UseGuards(AuthGuard('jwt'))
  @Get('/weeklyExpenseList')
  getWeekly(@Query() { start, end },@Request() req:any) {
    return this.expensesService.weekLyReport(req.user.id,start,end);
  }



  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.expensesService.findOne(+id);
  }


  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExpenseDto: UpdateExpenseDto) {
    return this.expensesService.update(+id, updateExpenseDto);
  }


  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.expensesService.remove(+id);
  }
}
