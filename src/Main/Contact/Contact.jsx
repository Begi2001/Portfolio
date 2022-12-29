import React, { useState } from "react";

import "./contact.scss";
import axios from "axios";

const Content = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Text, setText] = useState("");

  let token = "5758816724:AAHDejThp2CJHZ5XiMORwHw9JEUDUXlt6Ng";
  let chat_id = -811794440;

  let message = "Yangi murojat:\n";
  message += `📝 Ismi: ${Name}\n`;
  message += `📧 Email: ${Email}\n`;
  message += `✍️ Habari: ${Text}\n`;

  let url_chat = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}`;
  const submitss = new FormData();
  submitss.append("text", message);
  const submits = (e) => {
    if (Name !== "" && Email !== "" && Text !== "") {
      axios.post(url_chat, submitss).then((res) => res.json());
      setText("");
      setName("");
      setEmail("");
    } else {
    }
  };
  return (
    <div className="main-contact_wrapper">
      <div className="contact-header">
        <div className="wrapper-contact">
          <p className="title-contact">Contact</p>
          <hr className="hr-contact" />
        </div>
        <div className="map-box">
          <iframe title='my-frame'
            className="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60315.37569059441!2d72.3055821156051!3d40.78410171337472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc901d6b13d4ef%3A0xfc45bcaa7973dfac!2sAndijan%2C%20Uzbekistan!5e0!3m2!1sen!2sbd!4v1667296825668!5m2!1sen!2sbd"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p className="title-form">Contact Form</p>
        <div className="form-inputs">
          <input
            value={Name}
            onChange={(e) => setName(e.target.value)}
            className="input-name"
            type="text"
            placeholder="Full name"
          />
          <input
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-email"
            type="text"
            placeholder="Phone Number"
          />
        </div>
        <textarea
          value={Text}
          onChange={(e) => setText(e.target.value)}
          className="text-area"
          placeholder="Your Message"
        />
        <div className="bg-btn_message">
          <button onClick={submits} className="btn-send">
            Send Mesasage
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
