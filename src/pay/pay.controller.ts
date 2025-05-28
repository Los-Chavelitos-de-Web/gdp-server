import { Body, Controller, Post } from '@nestjs/common';
import { PayService } from './pay.service';
import { ProductPay } from 'src/models/Product';
import { PayType } from 'src/types/PayType';

@Controller('pay')
export class PayController {
  constructor(private readonly payService: PayService) {}

  @Post()
  payment(@Body() payData: PayType) {
    return this.payService.createPreference(payData);
  }
}
