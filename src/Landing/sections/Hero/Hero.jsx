import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <img
          className="hero__bg-image"
          src="/images/hero/bg-image.png"
          alt=""
        />
        <img
          className="hero__bg-shape"
          src="/images/hero/bg-shape.png"
          alt=""
        />
      </div>
      <div className="auto__container">
        <div className="hero__inner">
          <div className="heroContent">
            <div className="heroContent__inner">
              <div className="heroContent__logo">
                <img src="/images/hero/hero-logo.png" alt="" />
              </div>
              <h1>
                Ethical  <br /> Integrity{" "}
                <span>
                  <img src="/images/hero/stars/1.svg" alt="" />
                </span>{" "}
                in{" "}
                <br />
                <span>
                  <img src="/images/hero/stars/2.svg" alt="" />
                </span>{" "}
                Microdosing <br /> Experiences{" "}
                <span className="sm">
                  <img src="/images/hero/stars/3.svg" alt="" />
                </span>
              </h1>
              <div className="heroContent__row">
                <div className="heroContent__tag">Guides Available</div>
                <div className="heroContent__tag">Free support</div>
                <div className="heroContent__tag">30-Day Dose</div>
                <div className="heroContent__tag">
                  Specialized & Certified Truffles
                </div>
              </div>
              <div className="heroContent__foot">
                <a href="" className="button primary">
                  Buy 30-Day Guide Kit
                </a>
              </div>
            </div>
          </div>
          <div className="hero__inner-review">
            <h4>Our Testimonials</h4>
            <div className="testimonialsItem">
              <div className="testimonialsItem__inner">
                <div className="testimonialsItem__head">
                  <div className="testimonialsItem__avatar">
                    <img src="/images/testimonials/4.png" alt="" />
                  </div>
                  <div className="testimonialsItem__stars">
                    <img src="/images/icons/stars.svg" alt="" />
                  </div>
                  <h6 className="sm">Duke Dennis - Content Creator</h6>
                </div>
                <div className="testimonialsItem__body">
                  <p>
                    This was a great experience using Mindtrospect’s Truffle
                    30-day kit. I purchased the full-set and was absolutely blow
                    away by the level of craftsmanship inside the guidebooks. My
                    30-day experience was life-changing and my friends were so
                    astonished when they saw the results. Thank you so much
                    Mindtrospect for your effort and care!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
