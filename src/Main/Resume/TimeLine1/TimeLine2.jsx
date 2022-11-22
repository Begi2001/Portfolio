import React from "react";

import { ReactComponent as Book } from "./book-outline.svg";

const dataEducation = [
  {
    id: 1,
    education: "Digital-city",
    year: "2022-2022 (3 month)",
    text: "Front-end(React JS)",
  },
  {
    id: 2,
    education: "Movarounnahr-education",
    year: "2022-2022 (3 month)",
    text: "Front-end(React JS)",
  },
];
const TimeLine2 = () => {
  return (
    <section className="timeline-wrapper1">
      <div className="box-education">
        <div className="icon-box">
          <div className="box-bg">
            <Book className="svg-book" />
          </div>
        </div>
        <p className="title-education">Experience</p>
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
  );
};

export default TimeLine2;
