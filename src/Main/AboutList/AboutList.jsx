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
          My name is Bexzod and I am currently a talented and growing young
          frontend developer. My future plan is to study and improve my skills ,
          and work with high level developers for progressing in the most
          popular company for being the best frontend developer{" "}
        </p>
        <p className="text-2">
          My job is to build your website so that it is functional and
          user-friendly but at the same time attractive. Moreover, I add
          personal touch to your product and make sure that is eye-catching and
          easy to use. My aim is to bring across your message and identity in
          the most creative way.
        </p>
      </section>
      <Service />
      <Testimonials />
      <Clients />
    </div>
  );
};

export default AboutList;
