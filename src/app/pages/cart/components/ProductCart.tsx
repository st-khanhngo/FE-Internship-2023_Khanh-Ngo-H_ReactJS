import { Link } from 'react-router-dom';
import { CartItem, CartProps } from '../../../models/cartItem';
import { useDispatch } from 'react-redux';
import { deleteCart, updateCart } from '../../../redux/action';
import { useRef, useState } from 'react';

interface ProductCartProps {
  cartItem: CartProps;
}

export const ProductCart = ({ cartItem }: ProductCartProps) => {
  const {
    id,
    name,
    image,
    discount,
    price,
    quantity,
    finalPrice,
    getItemTotalPrice,
  } = new CartItem(cartItem);
  const [isEditItem, setIsEditItem] = useState(false);
  const editInput = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const changeCartQuantity = (id: number, quantity: number): void => {
    if (quantity > 0) {
      dispatch(updateCart(id, quantity));
    } else {
      deleteCartItem(id);
    }
  };

  const deleteCartItem = (id: number): void => {
    if (window.confirm(`Do you want to delete this item?`)) {
      dispatch(deleteCart(id));
    }
  };

  const toggleShowEdit = (): void => {
    setIsEditItem(!isEditItem);
  };

  function handleEditQuantity(
    event: React.KeyboardEvent<HTMLInputElement>
  ): void {
    if (event.key === 'Enter' && editInput) {
      handleSave();
    }
  }

  function handleSave(): void {
    toggleShowEdit();
    changeCartQuantity(id, Number.parseInt(editInput.current!.value.trim()));
  }

  return (
    <li className="cart-item">
      <div className={`cart row ${discount && 'product-discount'}`}>
        <Link className="cart-info col col-4" to={`/${id}`}>
          <h4>{name}</h4>
          <img className="cart-img" src={image} alt={name} />
        </Link>
        <div className="btn-wrapper cart-action col col-4">
          <button
            className="btn btn-change"
            onClick={() => changeCartQuantity(id, quantity - 1)}
          >
            -
          </button>
          {isEditItem ? (
            <input
              className="input-quantity"
              ref={editInput}
              defaultValue={quantity}
              onKeyUp={handleEditQuantity}
              onBlur={handleSave}
              autoFocus
            ></input>
          ) : (
            <span className="cart-quantity" onClick={toggleShowEdit}>
              {quantity}
            </span>
          )}
          <button
            className="btn btn-change"
            onClick={() => changeCartQuantity(id, quantity + 1)}
          >
            +
          </button>
          <button className="btn btn-delete" onClick={() => deleteCartItem(id)}>
            DELETE
          </button>
        </div>
        <div className="cart-price col col-4">
          <div className="price-wrapper">
            <span className="product-price">{price}</span>
            {discount > 0 && (
              <span className="product-price-discount">{finalPrice}</span>
            )}
          </div>
          <p className="price-total">
            Total:{' '}
            <span className="product-price">
              {getItemTotalPrice(finalPrice, quantity)}
            </span>
          </p>
        </div>
      </div>
    </li>
  );
};
