import React from 'react';
import NavBar from '../NavBar/NavBar';
import logo from '../../assets/logo.png';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <NavBar
        logoSrc={logo}
        navs={[
          { link: '/', title: 'Home' },
          { link: '/underconstruction', title: 'About' },
          { link: '/underconstruction', title: 'Menu' },
          { link: '/booking', title: 'Reservations' },
          { link: '/underconstruction', title: 'Order online' },
        ]}
      />
    </header>
  );
}
