import React from "react";
import "./main.scss";
import Sidebar from "./Sidebar/Sidebar";
import MainAbout from "./MainAbout/MainAbout";
const Main = () => {
  return (
    <div className="wrapper-main">
      <Sidebar />
      <MainAbout />
    </div>
  );
};

export default Main;
