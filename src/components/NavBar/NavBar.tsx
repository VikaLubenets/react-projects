import { PropsNavigation } from './types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

interface NavBarProps extends PropsNavigation {
  logoSrc: string;
  navs: { link: string; title: string }[];
}

export default function NavBar({ logoSrc, navs }: NavBarProps): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <React.Fragment>
      <img
        src={logoSrc}
        alt="Logo"
        width={200}
        height={55}
        className="logo-img"
      />
      <nav>
        <ul className={`nav-container ${isMenuOpen ? 'menu-open' : ''}`}>
          {navs.map((nav, index) => (
            <Link
              to={nav.link}
              key={`${nav.link}+${index}`}
              className="nav-link"
            >
              {nav.title}
            </Link>
          ))}
        </ul>
        <div
          className={`burger-btn ${isMenuOpen ? 'show' : ''}`}
          onClick={handleToggleMenu}
        >
          <span className="span"></span>
          <span className="span"></span>
          <span className="span"></span>
        </div>
      </nav>
    </React.Fragment>
  );
}
