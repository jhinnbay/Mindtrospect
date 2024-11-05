import React, { useEffect, useState } from "react";
import Slider from "react-slick";
const testimonialsList = [
  {
    id: "1",
    name: "Duke Dennis",
    image: "/images/testimonials/1.png",
    prof: "Content Creator",
    text: "This was a great experience using Mindtrospect’s Truffle 30-day kit. I purchased the full-set and was absolutely blow away by the level of craftsmanship inside the guidebooks. My 30-day experience was life-changing and my friends were so astonished when they saw the results. Thank you so much Mindtrospect for your effort and care!",
  },
  {
    id: "2",
    name: "Duke Dennis",
    image: "/images/testimonials/2.png",
    prof: "Content Creator",
    text: "This was a great experience using Mindtrospect’s Truffle 30-day kit. I purchased the full-set and was absolutely blow away by the level of craftsmanship inside the guidebooks. My 30-day experience was life-changing and my friends were so astonished when they saw the results. Thank you so much Mindtrospect for your effort and care!",
  },
  {
    id: "3",
    name: "Duke Dennis",
    image: "/images/testimonials/3.png",
    prof: "Content Creator",
    text: "This was a great experience using Mindtrospect’s Truffle 30-day kit. I purchased the full-set and was absolutely blow away by the level of craftsmanship inside the guidebooks. My 30-day experience was life-changing and my friends were so astonished when they saw the results. Thank you so much Mindtrospect for your effort and care!",
  },
  {
    id: "4",
    name: "Duke Dennis",
    image: "/images/testimonials/4.png",
    prof: "Content Creator",
    text: "This was a great experience using Mindtrospect’s Truffle 30-day kit. I purchased the full-set and was absolutely blow away by the level of craftsmanship inside the guidebooks. My 30-day experience was life-changing and my friends were so astonished when they saw the results. Thank you so much Mindtrospect for your effort and care!",
  },
];
export default function Testimonials() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 931) {
      setMobile(true);
    } else {
      setMobile(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 931) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    });
  }, []);
  const settings = {
    infinite: false,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 600,
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
    ],
  };
  return (
    <section className="testimonials">
      <div className="auto__container">
        <div className="testimonials__inner">
          <div className="testimonials__inner-title">
            <h2>Testimonials</h2>
          </div>
          {mobile ? (
            <Slider className="testimonials__inner-slider" {...settings}>
              {testimonialsList.map((item, index) => {
                return <TestimonialsItem {...item} key={index} />;
              })}
            </Slider>
          ) : (
            <div className="testimonials__inner-row">
              {testimonialsList.map((item, index) => {
                return <TestimonialsItem {...item} key={index} />;
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
export const TestimonialsItem = (props) => {
  return (
    <div className="testimonialsItem">
      <div className="testimonialsItem__inner">
        <div className="testimonialsItem__head">
          <div className="testimonialsItem__avatar">
            <img src={props.image} alt="" />
          </div>
          <div className="testimonialsItem__stars">
            <img src="/images/icons/stars.svg" alt="" />
          </div>
          <h6 className="sm">
            {props.name} - {props.prof}
          </h6>
        </div>
        <div className="testimonialsItem__body">
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};
