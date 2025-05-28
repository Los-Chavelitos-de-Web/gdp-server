import { ProductPay } from 'src/models/Product';

export type PayType = {
  correo: string;
  products: ProductPay[];
}
