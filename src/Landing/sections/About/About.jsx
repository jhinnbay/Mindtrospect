import React from "react";
const AboutList = [
  {
    id: "1",
    title: "Unlocked Creativity",
    image: "/images/about/1.png",
    text: "20 grams of hand-selected and high quality truffles. Leading you to an improved mind of creativity & freedom",
  },
  {
    id: "2",
    title: "No More Depression",
    image: "/images/about/2.png",
    text: "20 grams of hand-selected and high quality truffles. Leading you to an improved mind of creativity & freedom",
  },
  {
    id: "3",
    title: "Wife’s Not Dead!",
    image: "/images/about/3.png",
    text: "20 grams of hand-selected and high quality truffles. Leading you to an improved mind of creativity & freedom",
  },
  {
    id: "4",
    title: "My Anxiety Stopped",
    image: "/images/about/4.png",
    text: "20 grams of hand-selected and high quality truffles. Leading you to an improved mind of creativity & freedom",
  },
];
export default function About() {
  return (
    <section className="about">
      <div className="about__bg">
        <img src="/images/about/bg.png" alt="" />
      </div>
      <div className="auto__container">
        <div className="about__inner">
          <div className="about__inner-title">
            <h3>
              Be the architect of your life with the magic of psilocybin
              truffles.
            </h3>
          </div>
          <div className="about__inner-row">
            {AboutList.map((item, index) => {
              return <AboutItem {...item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
const AboutItem = (props) => {
  return (
    <div className="aboutItem">
      <div className="aboutItem__content">
        <h6>{props.title}</h6>
        <p className="big">{props.text}</p>
      </div>
      <div className="aboutItem__image">
        <img src={props.image} alt="" />
      </div>
    </div>
  );
};
