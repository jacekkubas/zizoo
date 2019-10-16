import React from 'react';
import logo from '../img/zizoo-blue.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <img className="header__logo" src={logo} alt="Zizoo logo" />
          <span>The leading global boat rental platform</span>
        </div>
      </div>
    </header>
  )
}

export default Header;