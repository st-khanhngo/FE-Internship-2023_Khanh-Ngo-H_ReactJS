import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logo from '../../../../assets/images/shop-logo.png';

import CartService from '../../services/cartService';
import { StateProps } from '../../../redux/store';

export const Header = () => {
  const cart = useSelector((state: StateProps) => state.cart.cart);
  const cartService = new CartService();

  const location = useLocation().pathname.replace('/', '');
  return (
    <header className={`header ${location}`}>
      <div className="container flex">
        <h1 className="header-logo">
          <Link to="/" className="header-link">
            <img className="img img-logo img-lg" src={logo} alt="E-Shop" />
            <img
              className="img img-logo img-sm"
              src="/src/assets/images/shop-logo-sm.png"
              alt="E-Shop"
            />
          </Link>
        </h1>

        <nav className="nav-main">
          <ul className="nav-list flex">
            <li className="nav-item">
              <Link className="nav-link txt-primary" to="/">
                Men
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link txt-primary" to="/">
                Woman
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link txt-primary" to="/">
                Kids
              </Link>
            </li>
          </ul>
        </nav>
        <ul className="action-list flex">
          <li className="action-item">
            <Link to="/" className="action-link">
              <i className="icon icon-search icon-lg"></i>
              <i className="icon icon-cart-sm"></i>
            </Link>
          </li>
          <li className="action-item">
            <Link to="/cart" className="action-link">
              <i className="icon icon-cart icon-lg"></i>
              <i className="icon icon-profile-sm"></i>
              {cart.length > 0 && (
                <span className="badge badge-danger badge-cart">
                  {cartService.getCartTotalItem(cart)}
                </span>
              )}
            </Link>
          </li>
          <li className="action-item">
            <Link to="/" className="action-link">
              <i className="icon icon-profile icon-lg"></i>
              <i className="icon icon-menu-sm"></i>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
