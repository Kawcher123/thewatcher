import { Controller, Get, Post, Body,Request, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PaymentMethodsService } from './payment_methods.service';
import { CreatePaymentMethodDto } from './dto/create-payment_method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment_method.dto';
import { AuthGuard } from '@nestjs/passport';
import { Put } from '@nestjs/common/decorators';

@Controller('user/payment-methods')
export class PaymentMethodsController {
  constructor(private readonly paymentMethodsService: PaymentMethodsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('/addPaymentMethod')
  create(@Body() createPaymentMethodDto: CreatePaymentMethodDto,@Request() req:any) {
    return this.paymentMethodsService.create(createPaymentMethodDto,req.user.id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/paymentMethodList')
  findAll(@Request() req:any) {
    return this.paymentMethodsService.findAll(req.user.id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/paymentMethod:id')
  findOne(@Param('id') id: string) {
    return this.paymentMethodsService.findOne(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch('/editpaymentMethod')
  update( @Body() updatePaymentMethodDto: UpdatePaymentMethodDto,@Request() req:any) {
    return this.paymentMethodsService.update(+updatePaymentMethodDto.id, updatePaymentMethodDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('/deletepaymentMethod/:id')
  remove(@Param('id') id: string) {
    return this.paymentMethodsService.remove(+id);
  }
}
