import React from 'react'
import logo from '../../../assets/images/shop-logo.png'

const Header = () => {
  return (
    <header className="header">
      <div className="container flex">

      <h1 className="header-logo">
        <a href="./index.html" className="header-link">
          <img className="img img-logo img-lg" src={logo} alt="E-Shop"/>
          <img className="img img-logo img-sm" src="/src/assets/images/shop-logo-sm.png" alt="E-Shop"/>
        </a>
      </h1>

      <nav className="nav-main">
        <ul className="nav-list flex">
          <li className="nav-item">
            <a className="nav-link txt-primary" href="">Men</a>
          </li>
          <li className="nav-item">
            <a className="nav-link txt-primary" href="">Woman</a>
          </li>
          <li className="nav-item">
            <a className="nav-link txt-primary" href="">Kids</a>
          </li>
        </ul>
      </nav>
      <ul className="action-list flex">
        <li className="action-item">
          <a href="" className="action-link">
            <i className="icon icon-search icon-lg"></i>
            <i className="icon icon-cart-sm"></i>
          </a>
        </li>
        <li className="action-item">
          <a href="./cart.html" className="action-link">
            <i className="icon icon-cart icon-lg"></i>
            <i className="icon icon-profile-sm"></i>
            <span className="badge badge-danger badge-cart"></span>
          </a>
        </li>
        <li className="action-item">
          <a href="" className="action-link">
            <i className="icon icon-profile icon-lg"></i>
            <i className="icon icon-menu-sm"></i>
          </a>
        </li>
      </ul>
      </div>
    </header>
  )
}

export default Header
