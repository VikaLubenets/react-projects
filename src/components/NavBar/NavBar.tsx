import { PropsNavigation } from './types';
import React from 'react';
import './NavBar.css';

interface NavBarProps extends PropsNavigation {
  logoSrc: string;
  navs: { link: string; title: string }[];
}

export default function NavBar({ logoSrc, navs }: NavBarProps): JSX.Element {
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
        <ul className="nav-container">
          {navs.map((nav, index) => (
            <li key={`${nav.link}+${index}`} className="nav-link">
              <a href={nav.link}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </React.Fragment>
  );
}
