/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import './CustomerSay.css';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import starImage from '../../assets/star.png';

const reviewsData = [
  {
    name: 'Nastya',
    age: 30,
    review: 'Some description here',
    rating: 4,
  },
  {
    name: 'John',
    age: 25,
    review: 'Another review text',
    rating: 5,
  },
  {
    name: 'Alice',
    age: 28,
    review: 'Yet another review',
    rating: 3,
  },
  {
    name: 'Bob',
    age: 35,
    review: 'One more review for the restaurant',
    rating: 2,
  },
];

export default function CustomerReview() {
  useEffect(() => {
    new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      modules: [Navigation, Pagination],
    });
  }, []);

  return (
    <div className="review-section">
      <div className="swiper">
        <h2 className="section-title">Customer Reviews</h2>
        <div className="swiper-wrapper">
          {reviewsData.map((review, index) => (
            <div key={index} className="swiper-slide review-container">
              <h3>Name: {review.name}</h3>
              <p>Age: {review.age}</p>
              <p>Review: {review.review}</p>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
}
