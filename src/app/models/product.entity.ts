import ProductProps from "./product.interface.js";

class Product implements ProductProps {
  id: number;
  name: string;
  image: string;
  price: number;
  discount: number;

  constructor(product: ProductProps) {
    const { id, name, image, price, discount } = product;
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.discount = discount || 0;
  }
}

export default Product
