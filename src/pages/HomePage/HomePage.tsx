import React from 'react';
import CallToAction from '../../components/CallToAction/CallToAction';
import Chicago from '../../components/Chicago/Chicago';
import CustomerSay from '../../components/CustomersSay/CustomerSay';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Specials from '../../components/Specials/Specials';
import './HomePage.css';

export default function HomePage() {
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <CallToAction
          header="Little Lemon"
          subtitle="20% Off this weekend"
          buttonName="Reserve a table"
        />
        <Specials />
        <CustomerSay />
        <Chicago />
      </main>
      <Footer />
    </React.Fragment>
  );
}
