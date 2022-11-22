import React from "react";
import Skills from "./MySkills/Skills";

import "./resume.scss";
import TimeLine1 from "./TimeLine1/TimeLine1";

const Resume = () => {
  return (
    <section className="wrapper-resume">
      <div className="resume-head">
        <p className="title-resume">Resume</p>
        <hr className="resume-hr" />
      </div>
      <TimeLine1 />
      <Skills />
    </section>
  );
};

export default Resume;
