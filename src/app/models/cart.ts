import { ProductProps } from "./product";

export interface CartProps extends ProductProps {
  quantity: number;
}

export class Cart implements CartProps {
  quantity: number;
  id: number;
  name: string;
  image: string;
  price: number;
  discount: number;
  finalPrice: number;

  constructor(cartItem: CartProps) {
    const { id, name, image, price, discount, quantity } = cartItem;
    this.id = id;
    this.name = name;
    this.image = image;
    this.quantity = quantity;
    this.price = price;
    this.discount = discount || 0;
    this.finalPrice = discount ? (price - ((price * discount) / 100)) : price;
  }

  getItemTotalPrice = (price:number, quantity:number) => {
    return parseFloat((price * quantity).toFixed(2));
  }
}
