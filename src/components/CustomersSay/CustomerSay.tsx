import React, { useEffect } from 'react';
import './CustomerSay.css';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const reviewsData = [
  {
    name: 'Nastya',
    age: 30,
    review:
      "A delightful experience! The ambiance was inviting, and the service impeccable. Some unique flavors made the dining truly memorable. I'd rate it a solid 4 out of 5!",
    rating: 4,
  },
  {
    name: 'John',
    age: 25,
    review:
      "Exceptional! Another visit, another fantastic meal. The menu variety is impressive, and the staff's attention to detail stands out. Easily a 5-star dining destination!",
    rating: 5,
  },
  {
    name: 'Alice',
    age: 28,
    review:
      "Yet another wonderful dining experience! The atmosphere was cozy, and the dishes offered a blend of flavors. While good, there's room for improvement, hence a 3-star rating.",
    rating: 3,
  },
  {
    name: 'Bob',
    age: 35,
    review:
      'One more visit to the restaurant left me wanting. The service lacked warmth, and the dishes were a letdown. A disappointing experience, earning it a 2-star rating.',
    rating: 2,
  },
];

export default function CustomerReview() {
  useEffect(() => {
    new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      spaceBetween: 0,
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
        <h2 className="section-title review-title">Customer Reviews</h2>
        <div className="swiper-wrapper">
          {reviewsData.map((review, index) => (
            <div key={index} className="swiper-slide review-container">
              <h3>Name: {review.name}</h3>
              <p>Age: {review.age}</p>
              <p>Review: {review.review}</p>
              <p>Rating: {review.rating}</p>
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
