import React from "react";

import "./aboutList.scss";
import Service from "./Service/Service";
import Testimonials from "./Testimonials/Testimonials";
import Clients from "./Clients/Clients";
const AboutList = () => {
  return (
    <div className="wrapper-about">
      <div className="header">
        <p className="title-aboutMe">About Me</p>
        <hr className="hr-header" />
      </div>
      <section className="about-text">
        <p className="text-1">
          I'm Creative Director and UI/UX Designer from Sydney, Australia,
          working in web development and print media. I enjoy turning complex
          problems into simple, beautiful and intuitive designs.
        </p>
        <p className="text-2">
          My job is to build your website so that it is functional and
          user-friendly but at the same time attractive. Moreover, I add
          personal touch to your product and make sure that is eye-catching and
          easy to use. My aim is to bring across your message and identity in
          the most creative way. I created web design for many famous brand
          companies.
        </p>
      </section>
      <Service />
      <Testimonials />
      <Clients />
    </div>
  );
};

export default AboutList;
