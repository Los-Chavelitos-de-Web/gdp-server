import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  getProducts() {
    return this.prisma.product.findMany();
  }

  async getProductoById(id: string) {
    return this.prisma.product.findFirst({
      where: {
        id: parseInt(id),
      },
    });
  }
}
