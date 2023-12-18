import React from 'react';
import Card from '../Card/Card';
import GreekSaladImg from '../../assets/salad.png';
import Brusketta from '../../assets/brusketta.png';
import Tart from '../../assets/tart.png';
import './Specials.css';

export default function Specials() {
  return (
    <div className="specials-container">
      <div className="header-container">
        <h2 className="section-title">Specials</h2>
        <a className="specials-btn">View all</a>
      </div>
      <div className="cards-container">
        <Card
          photo={GreekSaladImg}
          price="5"
          title="Greek salad"
          description="some description here"
        />
        <Card
          photo={Brusketta}
          price="5"
          title="Brusketta"
          description="some description here"
        />
        <Card
          photo={Tart}
          price="5"
          title="Lemon tart"
          description="some description here"
        />
      </div>
    </div>
  );
}
