import React, { useState } from "react";

import imgAvatar from "../../assets/avatar.png";

import { dataContact } from "./sidbarData";
import { dataLinks } from "./sidbarData";

import "./sidebar.scss";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`wrapperSidebar ${open ? "active" : ""}`}>
      <div className="sidebar-more_btn" onClick={(e) => setOpen(!open)}>
        <button className="bg-btn" />
      </div>
      <div className="sidebar-info">
        <div className="avatar-box">
          <img className="avatarImg" src={imgAvatar} />
        </div>
        <div className="name-job">
          <p className="name-avatar">Bexzodbek Tursunboyev</p>
          <p className="job-avatar">Web developer</p>
        </div>
      </div>
      <div className="sidebar-info_more">
        <div className="contacts-list">
          <hr className="hr-top" />
          <div className="contact-item">
            {dataContact.map((res, id) => (
              <div key={id} className="wrapper-info">
                <div className="icon-box">
                  <div className="icon">{res.icon} </div>
                </div>
                <div className="contact-info">
                  <p className="title-info">{res.title}</p>
                  <a
                    className="link-info"
                    href={res.type}
                    rel="noopener noreferrer"
                  >
                    {res.url}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <hr className="hr-under" />
        </div>
        <ul className="ul-info_more">
          {dataLinks.map((res, id) => (
            <a key={id} target="./blank" href={res.url}>
              <li className="li-info_more">{res.app}</li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
