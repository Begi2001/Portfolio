import React from "react";

import "./cards.scss";
import { ReactComponent as Eye } from "../CardsImg/eye.svg";

const Card = ({ data }) => {
  const { id, img, name, type, url } = data;
  return (
    <div key={id} className="wrapper-card">
      <a className="link-card" href={url} target="_blank">
        <div className="eye-box">
          <Eye className="box-img" />
        </div>
        <img className="link-img" src={img} alt="" />
      </a>
      <div className="cards-name">
        <p className="card-name">{name}</p>
        <p className="card-type">{type}</p>
      </div>
    </div>
  );
};

export default Card;
