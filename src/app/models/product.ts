enum ProductStatus {
  OUT_OF_STOCK,
  AVAILABLE,
}

export interface ProductProps {
  id: number;
  name: string;
  image: string;
  discount: number;
  price: number;
  status: ProductStatus;
}

export class ProductItem implements ProductProps {
  id: number;
  name: string;
  image: string;
  price: number;
  discount: number;
  status: ProductStatus;

  constructor(product: ProductProps) {
    const { id, name, image, price, discount, status } = product;
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.discount = discount || 0;
    this.status = status;
  }

  calcFinalPrice = () => {
    return (this.price * (100 - this.discount)) / 100;
  };
}
