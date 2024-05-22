import React from "react";
import "./styles.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import { RWebShare } from "react-web-share";

function Footer() {
  return (
    <div className="footer">
      <a href="/">
        <h2 style={{ color: "#fff" }}>CryptoDozz.</h2>
      </a>

      <div className="socials-flex">
        <a href="https://wa.me/919821437422">
          <WhatsAppIcon className="socials-icon" />
        </a>
        <a href="https://www.instagram.com/rajatkumar.4430?igsh=amdzcmtqeGhwbXJq">
          <InstagramIcon className="socials-icon" />
        </a>
        <a href="mailto:rajatkumar6072@gmail.com">
          <EmailIcon className="socials-icon" />
        </a>
        <RWebShare
          data={{
            text: "Crypto Dashboard made by Rajat Kumar using React JS",
            url: "#",
            title: "Crypto Dashboard",
          }}
          onClick={() => console.log("shared successfully!")}
        >
          <SendIcon className="socials-icon" />
        </RWebShare>        
      </div>
    </div>
  );
}

export default Footer;