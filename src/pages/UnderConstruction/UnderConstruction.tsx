import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './UnderConstruction.css';

export default function UnderConstruction() {
  return (
    <React.Fragment>
      <Header />
      <main className="main under-construction">
        <h2>Page under construction</h2>
      </main>
      <Footer />
    </React.Fragment>
  );
}
