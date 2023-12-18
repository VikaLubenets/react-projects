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
          { link: './', title: 'About' },
          { link: './', title: 'Menu' },
          { link: './', title: 'Reservations' },
          { link: './', title: 'Order online' },
        ]}
      />
    </header>
  );
}
