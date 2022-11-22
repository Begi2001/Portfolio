import React from "react";

import "./skills.scss";

const dataSkills = [
  {
    id: 1,
    name: "HTML5/CSS3",
    progress: "90%",
  },
  {
    id: 2,
    name: "Bootstrap5/MUI",
    progress: "60%",
  },
  {
    id: 3,
    name: "Sass/SCSS",
    progress: "80%",
  },
  {
    id: 4,
    name: "Npm/Yarn",
    progress: "70%",
  },
  {
    id: 5,
    name: "Git/Github",
    progress: "70%",
  },
  {
    id: 6,
    name: "ES6",
    progress: "70%",
  },
  {
    id: 7,
    name: "JavaScript",
    progress: "70%",
  },
  {
    id: 8,
    name: "ReactJS",
    progress: "80%",
  },
];

const Skills = () => {
  return (
    <section className="skills">
      <p className="skill-title">My Skills</p>
      <div className="skills-item">
        <div className="bg-items">
          {dataSkills.map(({ id, name, progress }) => (
            <div key={id} className="skill-progress">
              <p className="skills-title">
                {name} {progress}
              </p>
              <div className="skills-items_progress">
                <span style={{ width: progress }}></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
