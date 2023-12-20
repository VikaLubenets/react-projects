import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './ConfirmedBooking.css';

export default function ConfirmedBooking() {
  return (
    <React.Fragment>
      <Header />
      <main className="main main-confirmation">
        <div className="success-notification">
          Reservation successful! Thank you!
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}
