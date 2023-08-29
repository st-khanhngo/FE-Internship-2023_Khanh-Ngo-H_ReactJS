import { Link } from 'react-router-dom';
import { ProductItem } from '../../../models/product';

interface ProductComponentProps {
  product: ProductItem;
  addToCart: (product: ProductItem) => void;
}

export const Product = ({ product, addToCart }: ProductComponentProps) => {
  const { name, image, discount, price, status, calcFinalPrice } = product;
  console.log(status);

  return (
    <li className="product-item col col-3 col-sm-6">
      <div
        className={`product ${discount > 0 && 'product-discount'} ${
          status ? 'available' : 'unavailable'
        }`}
      >
        <button
          className="btn btn-primary btn-cart"
          onClick={() => addToCart(product)}
        >
          {status ? 'ADD TO CART' : 'SOLD OUT'}
        </button>
        <Link className="product-link" to="/">
          {discount > 0 && (
            <span className="badge badge-danger">-{discount}%</span>
          )}
          <img className="product-img" src={image} alt={name} />
          <h4 className="product-title">{name}</h4>
          <div className="price-wrapper flex">
            {discount > 0 && (
              <span className="product-price-discount">{calcFinalPrice()}</span>
            )}
            <span className="product-price">{price}</span>
          </div>
        </Link>
      </div>
    </li>
  );
};
