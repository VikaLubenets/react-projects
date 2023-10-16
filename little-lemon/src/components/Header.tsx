import React from "react"
import { Navigation } from "./Navigation";
import logo from '@/assets/logo.png'
export const Header = () => {
    return (
        <header className='header'>
        <Navigation logoSrc={logo} navs={[
          {link: './', title: 'Home'},
          {link: './', title: 'About'},
          {link: './', title: 'Menu'},
          {link: './', title: 'Reservations'},
          {link: './', title: 'Order online'},
          {link: './', title: 'Login'}
          ]} />
      </header>
    );
}