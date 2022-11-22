import React from "react";

import "./service.scss";

import Letter from "./ServiceImg/letter.svg";
import Terminal from "./ServiceImg/terminal.svg";
import Phone from "./ServiceImg/phone.svg";
import Photo from "./ServiceImg/photo.svg";

const dataService = [
  {
    img: Letter,
    job: "Web Design",
    text: "The most modern and high-quality design made at a professional level.",
  },
  {
    img: Terminal,
    job: "Web Development",
    text: "High-quality development of sites at the professional level.",
  },
  {
    img: Phone,
    job: "Mobile Apps",
    text: "Professional development of applications for iOS and Android.",
  },
  {
    img: Photo,
    job: "Photography",
    text: "I make high-quality photos of any category at a professional level.",
  },
];

const Service = () => {
  return (
    <section className="service">
      <p className="service-title">What I'm Doing</p>
      <div className="service-list">
        {dataService.map((res, index) => (
          <div key={index} className="bg-service">
            <div className="service-item">
              <div className="service-img-box">
                <img className="service-img" src={res.img} alt="" />
              </div>
              <div className="service-content-box">
                <p className="content-job">{res.job}</p>
                <p className="contnet-text">{res.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
