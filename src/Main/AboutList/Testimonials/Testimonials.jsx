import React from "react";

import "./testimonials.scss";

import Ava1 from "./ContentImg/avatar1.png";
import Ava2 from "./ContentImg/avatar2.png";
import Ava3 from "./ContentImg/avatar3.png";
import Ava4 from "./ContentImg/avatar4.png";

const dataTestimonials = [
  {
    img: Ava1,
    name: "Daniel Lewis",
    text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
  },
  {
    img: Ava2,
    name: "Jessica Miller",
    text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
  },
  {
    img: Ava3,
    name: "Emily Evans",
    text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
  },
  {
    img: Ava4,
    name: "Henry William",
    text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <p className="testimonials-title">Testimonials</p>
      <div className="testimonials-list">
        {dataTestimonials.map((res, index) => (
          <div key={index} className="bg-item">
            <div className="testimonials-item">
              <div className="box-item">
                <img className="item-img" src={res.img} alt="#" />
              </div>
              <div className="name-text">
                <p className="item-name">{res.name}</p>
                <p className="item-text">{res.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
