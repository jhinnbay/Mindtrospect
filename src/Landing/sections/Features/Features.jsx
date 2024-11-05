import React from "react";
const featureList = [
  {
    id: "1",
    title: "Quality Dosage",
    image: "/images/features/1.png",
    text: "20 grams of hand-selected and high quality truffles. Leading you to an improved mind of creativity & freedom",
  },
  {
    id: "2",
    title: "Guidebook",
    image: "/images/features/2.png",
    text: "20 grams of hand-selected and high quality truffles. Leading you to an improved mind of creativity & freedom",
  },
  {
    id: "3",
    title: "Access The Tribe",
    image: "/images/features/1.png",
    text: "20 grams of hand-selected and high quality truffles. Leading you to an improved mind of creativity & freedom",
  },
  {
    id: "4",
    title: "Support",
    image: "/images/features/3.png",
    text: "20 grams of hand-selected and high quality truffles. Leading you to an improved mind of creativity & freedom",
  },
];
export default function Features() {
  return (
    <section className="features">
      <div className="auto__container">
        <div className="features__inner">
          <div className="features__inner-title">
            <h4>Key Features</h4>
          </div>
          <div className="features__inner-row">
            {featureList.map((item, index) => {
              return <FeaturesItem {...item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
const FeaturesItem = (props) => {
  return (
    <div className="featuresItem">
      <div className="featuresItem__bg">
        <img src="/images/features/bg.png" alt="" />
      </div>
      <div className="featuresItem__inner">
        <div className="featuresItem__image">
          <img src={props.image} alt="" />
        </div>
        <h5>{props.title}</h5>
        <p className="sm">{props.text}</p>
      </div>
    </div>
  );
};
