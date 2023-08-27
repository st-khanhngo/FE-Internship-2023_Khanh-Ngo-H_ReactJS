import { ProductProps } from "./product.interface";

export interface CartProps extends ProductProps {
  quantity: number
}
