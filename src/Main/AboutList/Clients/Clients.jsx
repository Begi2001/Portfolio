import React from "react";

import "./clients.scss";

import Logo1 from "../Clients/ClientsImg/logo1.png";
import Logo2 from "../Clients/ClientsImg/logo2.png";
import Logo3 from "../Clients/ClientsImg/logo3.png";
import Logo4 from "../Clients/ClientsImg/logo4.png";
import Logo5 from "../Clients/ClientsImg/logo5.png";
import Logo6 from "../Clients/ClientsImg/logo6.png";

const dataClients = [
  {
    img: Logo1,
  },
  {
    img: Logo2,
  },
  {
    img: Logo3,
  },
  {
    img: Logo4,
  },
  {
    img: Logo5,
  },
  {
    img: Logo6,
  },
];

const Clients = () => {
  return (
    <section className="clinets">
      <p className="title-clients">Clients</p>
      <div className="clients-list">
        {dataClients.map((res, index) => (
          <div key={index} className="clients-item">
            <a href="">
              <img className="img-size" src={res.img} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
