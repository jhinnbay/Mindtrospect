import React from "react";
const ExperienceList = [
  {
    id: "1",
    title: "Receive Kit",
    text: "20 grams of hand-selected and high quality truffles. Leading you to an improved mind of creativity & freedom",
  },
  {
    id: "2",
    title: "Learn",
    text: "20 grams of hand-selected and high quality truffles. Leading you to an improved mind of creativity & freedom",
  },
  {
    id: "3",
    title: "30-Day Progress",
    text: "20 grams of hand-selected and high quality truffles. Leading you to an improved mind of creativity & freedom",
  },
];
export default function Experience() {
  return (
    <section className="experience">
      <div className="experience__bg">
        <img src="/images/lines.png" alt="" />
        <img className="mob" src="/images/lines-mob.png" alt="" />
      </div>
      <div className="auto__container">
        <div className="experience__inner">
          <div className="experience__inner-title">
            <h2>Refreshing 30-Day Experience</h2>
          </div>
          <div className="experience__inner-row">
            {ExperienceList.map((item, index) => {
              return <ExperienceItem {...item} key={index} />;
            })}
          </div>
          <div className="experience__inner-foot">
            <a href="#" className="button primary">
              Begin 30-Day Guidebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
const ExperienceItem = (props) => {
  return (
    <div className="experienceItem">
      <h5>{props.title}</h5>
      <p className="big">{props.text}</p>
    </div>
  );
};
