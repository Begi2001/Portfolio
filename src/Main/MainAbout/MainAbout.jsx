import React from "react";
import "./main.scss";
import { Route, Routes } from "react-router-dom";
import AboutList from "../AboutList/AboutList";
import Navbar from "../Navbar/Navbar";
import Resume from "../Resume/Resume";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
const MainAbout = () => {
  return (
    <div className="main-about">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<AboutList />} />
        <Route path={"/resume"} element={<Resume />} />
        <Route path={"/portfolio"} element={<Portfolio />} />
        <Route path={"/contact"} element={<Contact />} />
      </Routes>
    </div>
  );
};

export default MainAbout;
