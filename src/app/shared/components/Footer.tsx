import { Link } from 'react-router-dom';
import logo from '../../../assets/images/shop-logo.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content row">
          <div className="footer-detail col col-6 col-sm-12">
            <img className="img img-logo" src={logo} alt="Logo" />
            <p className="footer-detail-desc">
              House My Brand designs clothing for the young, the old &everyone
              in between – but most importantly, for the fashionable
            </p>
            <ul className="social-list flex">
              <li className="social-item">
                <Link className="social-link" to="/">
                  <i className="icon icon-facebook"></i>
                </Link>
              </li>
              <li className="social-item">
                <Link className="social-link" to="/">
                  <i className="icon icon-twitter"></i>
                </Link>
              </li>
              <li className="social-item">
                <Link className="social-link" to="/">
                  <i className="icon icon-linkedin"></i>
                </Link>
              </li>
              <li className="social-item">
                <Link className="social-link" to="/">
                  <i className="icon icon-instagram"></i>
                </Link>
              </li>
              <li className="social-item">
                <Link className="social-link" to="/">
                  <i className="icon icon-youtube"></i>
                </Link>
              </li>
            </ul>
          </div>

          <ul className="footer-nav col col-6 row">
            <li className="footer-nav-col col col-4 col-sm-12">
              <p className="title">Shopping online</p>
              <ul className="footer-nav-list">
                <li className="item">
                  <Link className="link" to="/">
                    Order Status
                  </Link>
                </li>
                <li className="item">
                  <Link className="link" to="/">
                    Shipping and Delivery
                  </Link>
                </li>
                <li className="item">
                  <Link className="link" to="/">
                    Returns
                  </Link>
                </li>
                <li className="item">
                  <Link className="link" to="/">
                    Order Status
                  </Link>
                </li>
                <li className="item">
                  <Link className="link" to="/">
                    Order Status
                  </Link>
                </li>
              </ul>
            </li>
            <li className="footer-nav-col col col-4 col-sm-12">
              <p className="title">Information</p>
              <ul className="footer-nav-list">
                <li className="item">
                  <Link className="link" to="/">
                    Gift Cards
                  </Link>
                </li>
                <li className="item">
                  <Link className="link" to="/">
                    Find a store
                  </Link>
                </li>
                <li className="item">
                  <Link className="link" to="/">
                    Newsletter
                  </Link>
                </li>
                <li className="item">
                  <Link className="link" to="/">
                    Become a mesmer
                  </Link>
                </li>
                <li className="item">
                  <Link className="link" to="/">
                    Site feedback
                  </Link>
                </li>
              </ul>
            </li>
            <li className="footer-nav-col col col-4 col-sm-12">
              <p className="title">Contact</p>
              <ul className="footer-nav-list">
                <li className="item">
                  <p>store@uikit.com</p>
                </li>
                <li className="item">
                  <p>Hotline: +1 131 138 138</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-end">
        <p className="copyright txt-center">
          DESIGN BY ICEO.CO - © 2019. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};
