import React from "react";
import { facebook, instagram, linkedin, twitter } from "./SVG";

export default function Footer() {
  return (
    <section className="footer">
      <div className="auto__container">
        <div className="footer__inner">
          <div className="footer__inner-row">
            <div className="footer__inner-main">
              <div className="footer__inner-logo">
                <img src="/images/logo.svg" alt="" />
              </div>
              <div className="footer__inner-links">
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Careers</a>
                <a href="#">Whitepaper</a>
              </div>
            </div>
            <form className="footerForm">
              <p className="ex">
                Get the latest updates about Mindtrospect’s new products.
              </p>
              <div className="footerForm__row">
                <div className="input">
                  <input type="email" placeholder="Email Address" />
                </div>
                <button type="submit">
                  Send
                  <span>
                    <img src="/images/icons/mail.svg" alt="" />
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div className="footer__inner-copy">
            <div className="footer__inner-social">
              <a href="#">{facebook}</a>
              <a href="#">{twitter}</a>
              <a href="#">{instagram}</a>
              <a href="#">{linkedin}</a>
            </div>
            <div className="footer__inner-terms">
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
