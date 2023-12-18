import React from 'react';
import './Card.css';
import { CardProps } from './types';

export default function Card({ photo, price, title, description }: CardProps) {
  return (
    <article className="card">
      <img src={photo} alt="card-image" />
      <div className="card-info">
        <h3 className="card-title">{title}</h3>
        <div className="card-price">{price} $</div>
      </div>
      <div className="card-description">{description}</div>
      <a className="card-btn">Order delivery</a>
    </article>
  );
}
