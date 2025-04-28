import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly prodService: ProductsService) {}

  @Get('getAll')
  getAllProducts() {
    return this.prodService.getProducts();
  }

  @Get(':id')
  async getProductoById(@Param('id') id: string) {
    return this.prodService.getProductoById(id);
  }
}
