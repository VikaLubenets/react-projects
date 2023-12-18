import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ReservationForm from '../../components/ReservationForm/ReservationForm';

export default function BookingPage() {
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <ReservationForm />
      </main>
      <Footer />
    </React.Fragment>
  );
}
