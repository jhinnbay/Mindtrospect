import React from "react";
const faqList = [
  {
    id: "1",
    title: "1. Is it safe? - Of course.",
  },
  {
    id: "2",
    title: "2. Is it fun? - Of course.",
  },
  {
    id: "3",
    title: "3. My Country? Limited.",
  },
];
export default function Faq() {
  return (
    <section className="faq">
      <div className="auto__container">
        <div className="faq__inner">
          <div className="faq__inner-title">
            <h2>FAQ</h2>
          </div>
          <div className="faq__inner-content">
            {faqList.map((item, index) => {
              return <FaqItem {...item} key={index} />;
            })}
          </div>
          <div className="faq__inner-foot">
            <a href="#" className="button primary sm">
              Begin 30-Day Microdosing Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
const FaqItem = (props) => {
  return (
    <div className="faqItem">
      <h2>{props.title}</h2>
    </div>
  );
};
