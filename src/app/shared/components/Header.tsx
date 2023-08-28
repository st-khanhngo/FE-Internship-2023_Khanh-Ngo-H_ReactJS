import { Link } from 'react-router-dom';
import logo from '../../../assets/images/shop-logo.png';
import Carts from '../../models/carts';

interface Props {
  headerType: string;
  carts: Carts;
}

export const Header = ({ headerType, carts }: Props) => {
  return (
    <header className={`header ${headerType}`}>
      <div className='container flex'>
        <h1 className='header-logo'>
          <Link
            to='/'
            className='header-link'
          >
            <img
              className='img img-logo img-lg'
              src={logo}
              alt='E-Shop'
            />
            <img
              className='img img-logo img-sm'
              src='/src/assets/images/shop-logo-sm.png'
              alt='E-Shop'
            />
          </Link>
        </h1>

        <nav className='nav-main'>
          <ul className='nav-list flex'>
            <li className='nav-item'>
              <a
                className='nav-link txt-primary'
                href='/'
              >
                Men
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link txt-primary'
                href='/'
              >
                Woman
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link txt-primary'
                href='/'
              >
                Kids
              </a>
            </li>
          </ul>
        </nav>
        <ul className='action-list flex'>
          <li className='action-item'>
            <a
              href='/'
              className='action-link'
            >
              <i className='icon icon-search icon-lg'></i>
              <i className='icon icon-cart-sm'></i>
            </a>
          </li>
          <li className='action-item'>
            <Link
              to='/cart'
              className='action-link'
            >
              <i className='icon icon-cart icon-lg'></i>
              <i className='icon icon-profile-sm'></i>
              {carts.cart?.length > 0 && (
                <span className='badge badge-danger badge-cart'>
                  {carts.getCartTotalItem()}
                </span>
              )}
            </Link>
          </li>
          <li className='action-item'>
            <a
              href='/'
              className='action-link'
            >
              <i className='icon icon-profile icon-lg'></i>
              <i className='icon icon-menu-sm'></i>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
