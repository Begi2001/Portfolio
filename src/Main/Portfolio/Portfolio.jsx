import React from "react";
import "./portfolio.scss";
import MedArt from "./CardsImg/medart.png";
import Travel from "./CardsImg/travel.png";
import Academia from "./CardsImg/academia.png";
import Card from "./Cards/Card";

const dataCards = [
  {
    id: 1,
    img: MedArt,
    name: "MedArt Group",
    type: "Corporative Landing Page",
    url: "http://medartgroup.uz",
  },
  {
    id: 3,
    img: Academia,
    name: "Best Online Education",
    type: "e-Commerce",
    url: "https://educationbek2.netlify.app",
  },
  {
    id: 2,
    img: Travel,
    name: "Travel Pero",
    type: "e-Commerce",
    url: "",
  },
  // {
  //   id: 4,
  //   img: Californiya,
  //   name: "Californiya",
  //   type: "e-Commerce",
  //   url: "",
  // },
  // {
  //   id: 5,
  //   img: Miami,
  //   name: "Miami",
  //   type: "e-Commerce",
  //   url: "",
  // },
];

const Portfolio = () => {
  return (
    <div className="main-portfolio">
      <div className="portfolioHr">
        <p className="title-portfolio">Portfolio</p>
        <hr className="hr-portfolio" />
      </div>
      <div className="projects">
        <div className="project-list">
          {dataCards.map((dataCards, id) => (
            <Card key={id} data={dataCards} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
