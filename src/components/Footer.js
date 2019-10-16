import React from 'react';
import logo from '../img/zizoo-blue.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__logo"><img src={logo} alt="Zizoo logo" /></div>
          <div className="footer__copyright">Zizooboats GmbH All rights reserved</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;