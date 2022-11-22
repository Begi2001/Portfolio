import React from "react";

import "./line1.scss";
import { ReactComponent as Book } from "./book-outline.svg";
import TimeLine2 from "./TimeLine2";

const dataEducation = [
  {
    id: 1,
    education: "Digital-City",
    year: "2021 — 2022",
    text: "Front-End Developer",
  },
  {
    id: 2,
    education: "Tashkent Diplomat University",
    year: "2020 — 2022",
    text: "Information technology",
  },
  {
    id: 3,
    education: "Udemy",
    year: "2021 — 2022",
    text: "Web developer",
  },
];
const TimeLine1 = () => {
  return (
    <div className="main-wrapper-timelie">
      <section className="timeline-wrapper1">
        <div className="box-education">
          <div className="icon-box">
            <div className="box-bg">
              <Book className="svg-book" />
            </div>
          </div>
          <p className="title-education">Education</p>
        </div>
        <div className="timeline-list">
          {dataEducation.map((res, id) => (
            <div key={id} className="timeline-item">
              <p className="item-education">{res.education}</p>
              <p className="item-year">{res.year}</p>
              <p className="item-text">{res.text}</p>
            </div>
          ))}
        </div>
      </section>
      <TimeLine2 />
    </div>
  );
};

export default TimeLine1;
