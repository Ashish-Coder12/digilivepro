import React from "react";
import Hero from "../../Hero";
import Svga from "./3.svg";
import { contactone } from "./DataContact";
import "./Contact.css";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
function Contact() {
  return (
    <div>
      <Hero img={Svga} {...contactone} />
      <div className="soon">
        <h1 className="comming">Comming Soon</h1>
      </div>
      <div className="contact-us-links">
        <ul>
          <li>
            <a className="contact-links" href="tel:08588809091">
              <FiPhoneCall /> Call Us
            </a>
          </li>
          <li>
            <a
              className="contact-links"
              href="https://api.whatsapp.com/send/?phone=918588809091"
            >
              <FaWhatsapp /> Whatsapp
            </a>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default Contact;
