import React from "react";
import "./Contact.scss";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { FaRegAddressBook } from "react-icons/fa";
const Contact = () => {
  return (
    <div id="contact" className="contact_container">
      <div className="contact_content">
        <div className="contact_box">
          <div className="contact_icon">
            <MdOutlineMail />
          </div>
          <div className="contact_info">
            <h3>Email</h3>
            <span>biuro@montroe.com</span>
          </div>
        </div>
        <div className="contact_box">
          <div className="contact_icon">
            <AiOutlinePhone />
          </div>
          <div className="contact_info">
            <h3>Telefon</h3>
            <span>790-270-070</span>
          </div>
        </div>
        <div className="contact_box">
          <div className="contact_icon">
            <FaRegAddressBook />
          </div>
          <div className="contact_info">
            <h3>Adres</h3>
            <span>al. Solidarności 68/121 00-240 Warszawa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
